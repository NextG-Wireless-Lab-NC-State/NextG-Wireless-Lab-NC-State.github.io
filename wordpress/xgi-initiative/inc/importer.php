<?php
/**
 * One-click content importer.
 *
 * Builds every page, menu and custom post the site needs from the packaged
 * dataset in inc/data/xgi-content.json. Running it twice updates the existing
 * content instead of duplicating it.
 *
 * @package xGI
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Pages created by the importer: slug => [title, template, menu label].
 *
 * @return array
 */
function xgi_page_blueprint() {
	return array(
		'home'                 => array( 'Home', '', 'Home' ),
		'research'             => array( 'Research', 'page-templates/research.php', 'Research' ),
		'publications'         => array( 'Publications', 'page-templates/publications.php', 'Publications' ),
		'people'               => array( 'People', 'page-templates/people.php', 'People' ),
		'facilities-testbeds'  => array( 'Facilities and Testbeds', 'page-templates/facilities.php', 'Facilities & Testbeds' ),
		'events'               => array( 'Events', 'page-templates/events.php', 'Events' ),
		'industry-affiliates'  => array( 'Industry Affiliates', 'page-templates/affiliates.php', 'Industry Affiliates' ),
		// Present but deliberately left out of the navigation, as on the original site.
		'news'                 => array( 'News and Updates', 'page-templates/news.php', '' ),
	);
}

/**
 * Add the Tools screen.
 */
function xgi_importer_menu() {
	add_management_page(
		__( 'xGI Content Setup', 'xgi' ),
		__( 'xGI Content Setup', 'xgi' ),
		'manage_options',
		'xgi-import',
		'xgi_importer_screen'
	);
}
add_action( 'admin_menu', 'xgi_importer_menu' );

/**
 * Nudge the administrator the first time the theme is active.
 */
function xgi_importer_notice() {
	if ( ! current_user_can( 'manage_options' ) || get_option( 'xgi_imported' ) ) {
		return;
	}

	$screen = get_current_screen();
	if ( $screen && 'tools_page_xgi-import' === $screen->id ) {
		return;
	}

	printf(
		'<div class="notice notice-info"><p>%1$s <a href="%2$s" class="button button-primary" style="margin-left:8px">%3$s</a></p></div>',
		esc_html__( 'The xGI Initiative theme is active. Import the site content — pages, research areas, faculty, publications, events and menus — to finish setup.', 'xgi' ),
		esc_url( admin_url( 'tools.php?page=xgi-import' ) ),
		esc_html__( 'Set up content', 'xgi' )
	);
}
add_action( 'admin_notices', 'xgi_importer_notice' );

/**
 * Render the importer screen.
 */
function xgi_importer_screen() {
	if ( ! current_user_can( 'manage_options' ) ) {
		wp_die( esc_html__( 'You do not have permission to do this.', 'xgi' ) );
	}

	$log = array();

	if ( isset( $_POST['xgi_import_nonce'] ) && wp_verify_nonce( sanitize_key( wp_unslash( $_POST['xgi_import_nonce'] ) ), 'xgi_import' ) ) {
		$log = xgi_run_import();
	}

	$data = xgi_import_data();
	?>
	<div class="wrap">
		<h1><?php esc_html_e( 'xGI Content Setup', 'xgi' ); ?></h1>

		<?php if ( $log ) : ?>
			<div class="notice notice-success"><p><strong><?php esc_html_e( 'Import complete.', 'xgi' ); ?></strong></p></div>
			<ul style="list-style:disc;padding-left:20px">
				<?php foreach ( $log as $line ) : ?>
					<li><?php echo esc_html( $line ); ?></li>
				<?php endforeach; ?>
			</ul>
			<p>
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="button button-primary"><?php esc_html_e( 'View the site', 'xgi' ); ?></a>
			</p>
		<?php endif; ?>

		<p><?php esc_html_e( 'This creates every page, menu and content item the theme expects. It is safe to run more than once — existing items are matched by slug and updated in place rather than duplicated.', 'xgi' ); ?></p>

		<?php if ( ! $data ) : ?>
			<div class="notice notice-error"><p><?php esc_html_e( 'inc/data/xgi-content.json is missing or unreadable.', 'xgi' ); ?></p></div>
		<?php else : ?>
			<table class="widefat striped" style="max-width:540px;margin-bottom:20px">
				<tbody>
					<tr><td><?php esc_html_e( 'Pages', 'xgi' ); ?></td><td><?php echo count( xgi_page_blueprint() ); ?></td></tr>
					<tr><td><?php esc_html_e( 'Research areas', 'xgi' ); ?></td><td><?php echo count( $data['researchAreas'] ); ?></td></tr>
					<tr><td><?php esc_html_e( 'Faculty', 'xgi' ); ?></td><td><?php echo count( $data['faculty'] ); ?></td></tr>
					<tr><td><?php esc_html_e( 'Publications', 'xgi' ); ?></td><td><?php echo count( $data['publications'] ); ?></td></tr>
					<tr><td><?php esc_html_e( 'Facilities', 'xgi' ); ?></td><td><?php echo count( $data['facilities'] ); ?></td></tr>
					<tr><td><?php esc_html_e( 'Events', 'xgi' ); ?></td><td><?php echo count( $data['events'] ); ?></td></tr>
				</tbody>
			</table>

			<form method="post">
				<?php wp_nonce_field( 'xgi_import', 'xgi_import_nonce' ); ?>
				<p><button type="submit" class="button button-primary button-hero"><?php esc_html_e( 'Import xGI content', 'xgi' ); ?></button></p>
			</form>
		<?php endif; ?>
	</div>
	<?php
}

/**
 * Read the packaged dataset.
 *
 * @return array|null
 */
function xgi_import_data() {
	$file = XGI_DIR . '/inc/data/xgi-content.json';

	if ( ! file_exists( $file ) ) {
		return null;
	}

	$data = json_decode( file_get_contents( $file ), true ); // phpcs:ignore WordPress.WP.AlternativeFunctions

	return is_array( $data ) ? $data : null;
}

/**
 * Run the whole import.
 *
 * @return array Log lines.
 */
function xgi_run_import() {
	$data = xgi_import_data();
	$log  = array();

	if ( ! $data ) {
		return array( __( 'No data file found — nothing imported.', 'xgi' ) );
	}

	// Pages first, so the menus can point at them.
	$pages = array();
	foreach ( xgi_page_blueprint() as $slug => $spec ) {
		list( $title, $template ) = $spec;
		$pages[ $slug ]           = xgi_upsert_page( $slug, $title, $template );
	}
	/* translators: %d: number of pages. */
	$log[] = sprintf( __( '%d pages created or updated.', 'xgi' ), count( $pages ) );

	// Front page.
	update_option( 'show_on_front', 'page' );
	update_option( 'page_on_front', $pages['home'] );
	$log[] = __( 'Home set as the static front page.', 'xgi' );

	// Research areas.
	foreach ( $data['researchAreas'] as $area ) {
		xgi_upsert_post(
			'xgi_area',
			$area['slug'],
			$area['title'],
			array(
				'post_content' => $area['overview'],
				'menu_order'   => (int) $area['number'],
			),
			array(
				'xgi_keywords'   => $area['keywords'],
				'xgi_faculty'    => $area['facultySlugs'],
				'xgi_highlights' => array_map(
					function ( $group ) {
						return array(
							'faculty' => $group['faculty'],
							'items'   => $group['items'],
						);
					},
					$area['publicationGroups']
				),
			)
		);
	}
	/* translators: %d: number of research areas. */
	$log[] = sprintf( __( '%d research areas imported.', 'xgi' ), count( $data['researchAreas'] ) );

	// Faculty.
	$order = 0;
	foreach ( $data['faculty'] as $person ) {
		$post_id = xgi_upsert_post(
			'xgi_faculty',
			$person['slug'],
			$person['name'],
			array( 'menu_order' => ++$order ),
			array(
				'xgi_role'       => isset( $person['title'] ) ? $person['title'] : '',
				'xgi_department' => isset( $person['department'] ) ? $person['department'] : '',
				'xgi_leadership' => isset( $person['leadership'] ) ? $person['leadership'] : '',
				'xgi_lab'        => isset( $person['lab'] ) ? $person['lab'] : '',
				'xgi_keywords'   => isset( $person['keywords'] ) ? $person['keywords'] : array(),
				'xgi_email'      => isset( $person['email'] ) ? $person['email'] : '',
				'xgi_website'    => isset( $person['website'] ) ? $person['website'] : '',
			)
		);

		if ( $post_id && ! empty( $person['photo'] ) ) {
			xgi_attach_image( $post_id, $person['photo'], $person['name'] );
		}
	}
	/* translators: %d: number of faculty. */
	$log[] = sprintf( __( '%d faculty imported.', 'xgi' ), count( $data['faculty'] ) );

	// Publications.
	$order = 0;
	foreach ( $data['publications'] as $pub ) {
		++$order;
		xgi_upsert_post(
			'xgi_publication',
			sanitize_title( substr( $pub['title'], 0, 60 ) . '-' . $order ),
			$pub['title'],
			array( 'menu_order' => $order ),
			array(
				'xgi_authors'      => $pub['authors'],
				'xgi_venue'        => $pub['venue'],
				'xgi_award'        => empty( $pub['award'] ) ? '' : $pub['award'],
				'xgi_faculty_name' => $pub['facultyName'],
				'xgi_area_slug'    => $pub['areaSlug'],
			)
		);
	}
	/* translators: %d: number of publications. */
	$log[] = sprintf( __( '%d publications imported.', 'xgi' ), count( $data['publications'] ) );

	// Facilities.
	$order = 0;
	foreach ( $data['facilities'] as $facility ) {
		$post_id = xgi_upsert_post(
			'xgi_facility',
			sanitize_title( $facility['name'] ),
			$facility['name'],
			array(
				'post_content' => $facility['blurb'],
				'menu_order'   => ++$order,
			),
			array( 'xgi_url' => isset( $facility['url'] ) ? $facility['url'] : '' )
		);

		if ( $post_id && ! empty( $facility['image'] ) ) {
			xgi_attach_image( $post_id, $facility['image'], $facility['name'] );
		}
	}
	/* translators: %d: number of facilities. */
	$log[] = sprintf( __( '%d facilities imported.', 'xgi' ), count( $data['facilities'] ) );

	// Events.
	$order = 0;
	foreach ( $data['events'] as $event ) {
		$post_id = xgi_upsert_post(
			'xgi_event',
			sanitize_title( $event['title'] ),
			$event['title'],
			array( 'menu_order' => ++$order ),
			array(
				'xgi_date_label' => $event['date'],
				'xgi_location'   => $event['location'],
				'xgi_speaker'    => $event['speaker'],
				'xgi_topic'      => $event['topic'],
				'xgi_url'        => isset( $event['url'] ) ? $event['url'] : '',
				'xgi_past'       => empty( $event['past'] ) ? '' : '1',
			)
		);

		if ( $post_id && ! empty( $event['image'] ) ) {
			xgi_attach_image( $post_id, $event['image'], $event['title'] );
		}
	}
	/* translators: %d: number of events. */
	$log[] = sprintf( __( '%d events imported.', 'xgi' ), count( $data['events'] ) );

	// News placeholders — published but unlinked, exactly as on the original site.
	if ( ! empty( $data['news'] ) ) {
		foreach ( $data['news'] as $item ) {
			xgi_upsert_post(
				'post',
				sanitize_title( $item['headline'] ),
				$item['headline'],
				array(
					'post_content' => $item['excerpt'],
					'post_excerpt' => $item['excerpt'],
				),
				array( 'xgi_date_label' => $item['date'] )
			);
		}
		/* translators: %d: number of news placeholders. */
		$log[] = sprintf( __( '%d placeholder news posts imported.', 'xgi' ), count( $data['news'] ) );
	}

	// Menus.
	xgi_build_menu( 'primary', __( 'Primary Menu', 'xgi' ), $pages, array( 'home', 'research', 'publications', 'people', 'facilities-testbeds', 'events', 'industry-affiliates' ) );
	xgi_build_menu( 'footer', __( 'Footer Menu', 'xgi' ), $pages, array( 'research', 'facilities-testbeds', 'people', 'industry-affiliates', 'events' ) );
	$log[] = __( 'Primary and footer menus built and assigned.', 'xgi' );

	// Site identity.
	if ( 'Just another WordPress site' === get_option( 'blogdescription' ) || ! get_option( 'blogdescription' ) ) {
		update_option( 'blogdescription', __( 'The Future of Intelligent Wireless Systems', 'xgi' ) );
	}
	update_option( 'xgi_imported', time() );

	flush_rewrite_rules();
	wp_cache_delete( 'xgi_template_urls' );

	return $log;
}

/**
 * Create or update a page.
 *
 * @param string $slug     Page slug.
 * @param string $title    Page title.
 * @param string $template Page template file, or ''.
 * @return int Page ID.
 */
function xgi_upsert_page( $slug, $title, $template ) {
	$existing = get_page_by_path( $slug );

	$args = array(
		'post_type'   => 'page',
		'post_name'   => $slug,
		'post_title'  => $title,
		'post_status' => 'publish',
	);

	if ( $existing ) {
		$args['ID'] = $existing->ID;
		$page_id    = wp_update_post( $args );
	} else {
		$page_id = wp_insert_post( $args );
	}

	if ( $page_id && ! is_wp_error( $page_id ) ) {
		if ( $template ) {
			update_post_meta( $page_id, '_wp_page_template', $template );
		} else {
			delete_post_meta( $page_id, '_wp_page_template' );
		}
		return (int) $page_id;
	}

	return 0;
}

/**
 * Create or update a post of any type, matched on slug.
 *
 * @param string $post_type Post type.
 * @param string $slug      Slug.
 * @param string $title     Title.
 * @param array  $args      Extra post args.
 * @param array  $meta      Meta key => value.
 * @return int Post ID.
 */
function xgi_upsert_post( $post_type, $slug, $title, $args = array(), $meta = array() ) {
	$existing = get_posts(
		array(
			'post_type'      => $post_type,
			'name'           => $slug,
			'post_status'    => 'any',
			'posts_per_page' => 1,
			'fields'         => 'ids',
		)
	);

	$args = wp_parse_args(
		$args,
		array(
			'post_type'   => $post_type,
			'post_name'   => $slug,
			'post_title'  => $title,
			'post_status' => 'publish',
		)
	);

	if ( $existing ) {
		$args['ID'] = $existing[0];
		$post_id    = wp_update_post( $args );
	} else {
		$post_id = wp_insert_post( $args );
	}

	if ( is_wp_error( $post_id ) || ! $post_id ) {
		return 0;
	}

	foreach ( $meta as $key => $value ) {
		if ( '' === $value || array() === $value ) {
			delete_post_meta( $post_id, $key );
		} else {
			update_post_meta( $post_id, $key, $value );
		}
	}

	return (int) $post_id;
}

/**
 * Copy a bundled image into the media library and attach it as the featured image.
 *
 * @param int    $post_id  Post to attach to.
 * @param string $relative Path relative to assets/images (leading slash allowed).
 * @param string $title    Attachment title.
 * @return int Attachment ID, or 0.
 */
function xgi_attach_image( $post_id, $relative, $title ) {
	$relative = ltrim( $relative, '/' );
	$path     = XGI_DIR . '/assets/images/' . $relative;

	if ( ! file_exists( $path ) ) {
		return 0;
	}

	$existing = get_posts(
		array(
			'post_type'      => 'attachment',
			'post_status'    => 'inherit',
			'posts_per_page' => 1,
			'fields'         => 'ids',
			'meta_key'       => '_xgi_source',   // phpcs:ignore WordPress.DB.SlowDBQuery
			'meta_value'     => $relative,       // phpcs:ignore WordPress.DB.SlowDBQuery
		)
	);

	if ( $existing ) {
		set_post_thumbnail( $post_id, $existing[0] );
		return (int) $existing[0];
	}

	$upload = wp_upload_bits( basename( $path ), null, file_get_contents( $path ) ); // phpcs:ignore WordPress.WP.AlternativeFunctions

	if ( ! empty( $upload['error'] ) ) {
		return 0;
	}

	$filetype = wp_check_filetype( $upload['file'], null );

	$attachment_id = wp_insert_attachment(
		array(
			'post_mime_type' => $filetype['type'],
			'post_title'     => $title,
			'post_status'    => 'inherit',
		),
		$upload['file'],
		$post_id
	);

	if ( is_wp_error( $attachment_id ) || ! $attachment_id ) {
		return 0;
	}

	require_once ABSPATH . 'wp-admin/includes/image.php';
	wp_update_attachment_metadata( $attachment_id, wp_generate_attachment_metadata( $attachment_id, $upload['file'] ) );
	update_post_meta( $attachment_id, '_xgi_source', $relative );
	update_post_meta( $attachment_id, '_wp_attachment_image_alt', $title );
	set_post_thumbnail( $post_id, $attachment_id );

	return (int) $attachment_id;
}

/**
 * Build a nav menu from the imported pages and assign it to a location.
 *
 * @param string $location Theme location.
 * @param string $name     Menu name.
 * @param array  $pages    slug => page ID.
 * @param array  $slugs    Ordered slugs to include.
 */
function xgi_build_menu( $location, $name, $pages, $slugs ) {
	$menu = wp_get_nav_menu_object( $name );

	if ( ! $menu ) {
		$menu_id = wp_create_nav_menu( $name );
		if ( is_wp_error( $menu_id ) ) {
			return;
		}
	} else {
		$menu_id = $menu->term_id;
		foreach ( wp_get_nav_menu_items( $menu_id ) as $item ) {
			wp_delete_post( $item->ID, true );
		}
	}

	$blueprint = xgi_page_blueprint();
	$order     = 0;

	foreach ( $slugs as $slug ) {
		if ( empty( $pages[ $slug ] ) ) {
			continue;
		}

		$label = isset( $blueprint[ $slug ][2] ) && $blueprint[ $slug ][2]
			? $blueprint[ $slug ][2]
			: get_the_title( $pages[ $slug ] );

		wp_update_nav_menu_item(
			$menu_id,
			0,
			array(
				'menu-item-title'     => $label,
				'menu-item-object'    => 'page',
				'menu-item-object-id' => $pages[ $slug ],
				'menu-item-type'      => 'post_type',
				'menu-item-status'    => 'publish',
				'menu-item-position'  => ++$order,
			)
		);
	}

	$locations              = get_theme_mod( 'nav_menu_locations', array() );
	$locations[ $location ] = $menu_id;
	set_theme_mod( 'nav_menu_locations', $locations );
}

/**
 * WP-CLI: wp xgi import
 */
if ( defined( 'WP_CLI' ) && WP_CLI ) {
	WP_CLI::add_command(
		'xgi import',
		function () {
			foreach ( xgi_run_import() as $line ) {
				WP_CLI::log( $line );
			}
			WP_CLI::success( 'xGI content imported.' );
		}
	);
}
