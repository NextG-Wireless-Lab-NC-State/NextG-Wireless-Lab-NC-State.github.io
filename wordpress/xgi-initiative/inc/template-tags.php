<?php
/**
 * Template helpers and content queries.
 *
 * @package xGI
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default values for every theme option.
 *
 * @return array
 */
function xgi_defaults() {
	return array(
		'google_fonts'     => true,
		'contact_email'    => 'xgi-contact@ncsu.edu',
		'university'       => 'NC State University',
		'initiative'       => 'xGI Initiative',
		'department'       => 'Department of Electrical and Computer Engineering (ECE)',
		'hero_eyebrow'     => 'NC State University · Intelligent Wireless',
		'hero_title_start' => 'The Future of',
		'hero_title_glow'  => 'Intelligent',
		'hero_title_end'   => 'Wireless Networked Systems',
		'hero_lede'        => 'xGI brings together communications, AI, sensing, hardware, and autonomous systems to build the technologies that define the FutureG era.',
		'hero_stat_number' => '5',
		'hero_stat_label'  => 'Research Areas',
		'mission'          => 'The xGI Initiative at NC State advances the future of intelligent wireless networked systems through interdisciplinary research spanning communications, networking, AI, sensing, hardware, and autonomous applications. By integrating innovations across the wireless stack — from RF platforms and O-RAN architectures to AI-native networks and large-scale testbeds — xGI develops transformative technologies for next-generation communication, sensing, and connected systems. Through strong partnerships with industry and government, xGI accelerates innovation and real-world impact while positioning NC State as a national leader in next-generation technologies.',
		'vision'           => 'xGI envisions a future where communications, sensing, and intelligence are deeply integrated into a unified wireless fabric.',
		'research_intro'   => 'The convergence of AI, communications, and sensing is reshaping wireless networked systems. xGI leads this transformation through research spanning AI-native networks, integrated sensing and communications, intelligent infrastructure, and autonomous applications.',
		'research_pitch'   => 'xGI is the convergence of AI, communications, sensing, and autonomous systems for the FutureG era.',
		'show_news'        => false,
	);
}

/**
 * Read a theme option, falling back to the packaged default.
 *
 * @param string $key     Option key without the xgi_ prefix.
 * @param mixed  $default Optional override default.
 * @return mixed
 */
function xgi_option( $key, $default = null ) {
	$defaults = xgi_defaults();
	if ( null === $default && isset( $defaults[ $key ] ) ) {
		$default = $defaults[ $key ];
	}
	return get_theme_mod( 'xgi_' . $key, $default );
}

/**
 * Contact email address.
 *
 * @return string
 */
function xgi_contact_email() {
	return sanitize_email( xgi_option( 'contact_email' ) );
}

/**
 * mailto: link for the contact address.
 *
 * @return string
 */
function xgi_contact_mailto() {
	return 'mailto:' . antispambot( xgi_contact_email() );
}

/**
 * Inline arrow icon used on links and buttons.
 *
 * @param string $class Extra classes.
 * @return string
 */
function xgi_arrow( $class = '' ) {
	return sprintf(
		'<svg class="icon-arrow %s" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
		esc_attr( $class )
	);
}

/**
 * The two-line NC State / initiative lockup.
 *
 * @param string $class Wrapper class.
 * @return string
 */
function xgi_brand_lockup( $class = 'brand' ) {
	$university = xgi_option( 'university' );
	$parts      = explode( ' ', $university );
	$last       = array_pop( $parts );
	$first      = implode( ' ', $parts );

	return sprintf(
		'<span class="%1$s"><span class="brand__university"><strong>%2$s</strong> <span>%3$s</span></span><span class="brand__name">%4$s</span></span>',
		esc_attr( $class ),
		esc_html( strtoupper( $first ) ),
		esc_html( strtoupper( $last ) ),
		esc_html( xgi_option( 'initiative' ) )
	);
}

/**
 * Dark page header band shared by every interior page.
 *
 * @param array $args eyebrow, title, intro, actions (HTML).
 */
function xgi_page_hero( $args = array() ) {
	$args = wp_parse_args(
		$args,
		array(
			'eyebrow' => '',
			'title'   => '',
			'intro'   => '',
			'actions' => '',
		)
	);
	?>
	<section class="page-hero hero-glow grain">
		<span class="page-hero__rule" aria-hidden="true"></span>
		<div class="container page-hero__inner">
			<?php if ( $args['eyebrow'] ) : ?>
				<p class="eyebrow anim-rise" style="animation-delay:0.05s"><?php echo esc_html( $args['eyebrow'] ); ?></p>
			<?php endif; ?>
			<h1 class="page-hero__title anim-rise" style="animation-delay:0.15s"><?php echo esc_html( $args['title'] ); ?></h1>
			<?php if ( $args['intro'] ) : ?>
				<p class="page-hero__intro anim-rise" style="animation-delay:0.28s"><?php echo esc_html( $args['intro'] ); ?></p>
			<?php endif; ?>
			<?php if ( $args['actions'] ) : ?>
				<div class="page-hero__actions btn-row anim-rise" style="animation-delay:0.4s"><?php echo wp_kses_post( $args['actions'] ); ?></div>
			<?php endif; ?>
		</div>
	</section>
	<?php
}

/**
 * Render any editor content added to a template-driven page.
 *
 * The layouts below are generated from custom post types, so the page body is
 * optional — but anything typed into the editor is still published, under the
 * generated sections.
 */
function xgi_page_body() {
	$post = get_post();

	if ( ! $post || ! trim( $post->post_content ) ) {
		return;
	}

	echo '<section class="container section section--md"><div class="entry-content">';
	echo apply_filters( 'the_content', $post->post_content ); // phpcs:ignore WordPress.Security.EscapeOutput
	echo '</div></section>';
}

/**
 * Navigation shown before a menu has been assigned (i.e. before the importer runs).
 */
function xgi_nav_fallback() {
	echo '<ul><li class="' . ( is_front_page() ? 'current-menu-item' : '' ) . '"><a href="' . esc_url( home_url( '/' ) ) . '">' . esc_html__( 'Home', 'xgi' ) . '</a></li></ul>';
}

/* -------------------------------------------------------------------------
 * Queries
 * ---------------------------------------------------------------------- */

/**
 * Fetch posts of an xGI type in menu order.
 *
 * @param string $post_type Post type.
 * @param array  $args      Extra WP_Query args.
 * @return WP_Post[]
 */
function xgi_get_items( $post_type, $args = array() ) {
	return get_posts(
		wp_parse_args(
			$args,
			array(
				'post_type'      => $post_type,
				'posts_per_page' => -1,
				'orderby'        => array(
					'menu_order' => 'ASC',
					'title'      => 'ASC',
				),
				'order'          => 'ASC',
			)
		)
	);
}

/**
 * All research areas, ordered by area number.
 *
 * @return WP_Post[]
 */
function xgi_get_areas() {
	static $areas = null;
	if ( null === $areas ) {
		$areas = xgi_get_items( 'xgi_area' );
	}
	return $areas;
}

/**
 * Look up an area by slug.
 *
 * @param string $slug Post slug.
 * @return WP_Post|null
 */
function xgi_get_area_by_slug( $slug ) {
	foreach ( xgi_get_areas() as $area ) {
		if ( $area->post_name === $slug ) {
			return $area;
		}
	}
	return null;
}

/**
 * Faculty, ordered by menu order then surname.
 *
 * @return WP_Post[]
 */
function xgi_get_faculty() {
	static $faculty = null;
	if ( null === $faculty ) {
		$faculty = xgi_get_items( 'xgi_faculty' );
	}
	return $faculty;
}

/**
 * Look up a faculty member by slug.
 *
 * @param string $slug Post slug.
 * @return WP_Post|null
 */
function xgi_get_faculty_by_slug( $slug ) {
	foreach ( xgi_get_faculty() as $person ) {
		if ( $person->post_name === $slug ) {
			return $person;
		}
	}
	return null;
}

/**
 * Faculty listed on a research area, in the stored order.
 *
 * @param int $area_id Area post ID.
 * @return WP_Post[]
 */
function xgi_area_faculty( $area_id ) {
	$slugs = (array) get_post_meta( $area_id, 'xgi_faculty', true );
	$out   = array();

	foreach ( $slugs as $slug ) {
		$person = xgi_get_faculty_by_slug( $slug );
		if ( $person ) {
			$out[] = $person;
		}
	}

	return $out;
}

/**
 * Sort faculty by surname.
 *
 * @param WP_Post[] $people Faculty posts.
 * @return WP_Post[]
 */
function xgi_sort_by_surname( $people ) {
	usort(
		$people,
		function ( $a, $b ) {
			$sa = xgi_surname( $a->post_title );
			$sb = xgi_surname( $b->post_title );
			return strcasecmp( $sa, $sb );
		}
	);
	return $people;
}

/**
 * Last word of a name.
 *
 * @param string $name Full name.
 * @return string
 */
function xgi_surname( $name ) {
	$parts = preg_split( '/\s+/', trim( preg_replace( '/\(.*?\)/', '', $name ) ) );
	return end( $parts );
}

/**
 * Two-letter initials used for the portrait fallback.
 *
 * @param string $name Full name.
 * @return string
 */
function xgi_initials( $name ) {
	$parts = preg_split( '/\s+/', trim( preg_replace( '/\(.*?\)/', '', $name ) ) );
	$first = isset( $parts[0] ) ? mb_substr( $parts[0], 0, 1 ) : '';
	$last  = count( $parts ) > 1 ? mb_substr( end( $parts ), 0, 1 ) : '';
	return mb_strtoupper( $first . $last );
}

/**
 * Events, upcoming first.
 *
 * @param bool|null $past True for past only, false for upcoming only, null for all.
 * @return WP_Post[]
 */
function xgi_get_events( $past = null ) {
	$events = xgi_get_items( 'xgi_event' );

	if ( null === $past ) {
		return $events;
	}

	return array_values(
		array_filter(
			$events,
			function ( $event ) use ( $past ) {
				$is_past = (bool) get_post_meta( $event->ID, 'xgi_past', true );
				return $past ? $is_past : ! $is_past;
			}
		)
	);
}

/**
 * Facilities.
 *
 * @return WP_Post[]
 */
function xgi_get_facilities() {
	return xgi_get_items( 'xgi_facility' );
}

/**
 * Publications.
 *
 * @return WP_Post[]
 */
function xgi_get_publications() {
	static $pubs = null;
	if ( null === $pubs ) {
		$pubs = get_posts(
			array(
				'post_type'      => 'xgi_publication',
				'posts_per_page' => -1,
				'orderby'        => 'menu_order',
				'order'          => 'ASC',
			)
		);
	}
	return $pubs;
}

/**
 * Permalink for a page created by the importer, by template file.
 *
 * @param string $template Template filename, e.g. page-templates/research.php.
 * @return string
 */
function xgi_template_url( $template ) {
	$cache = wp_cache_get( 'xgi_template_urls' );

	if ( ! is_array( $cache ) ) {
		$cache = array();
		$pages = get_pages(
			array(
				'meta_key' => '_wp_page_template',
			)
		);
		foreach ( $pages as $page ) {
			$tpl = get_post_meta( $page->ID, '_wp_page_template', true );
			if ( $tpl && ! isset( $cache[ $tpl ] ) ) {
				$cache[ $tpl ] = get_permalink( $page );
			}
		}
		wp_cache_set( 'xgi_template_urls', $cache );
	}

	return isset( $cache[ $template ] ) ? $cache[ $template ] : home_url( '/' );
}

/* -------------------------------------------------------------------------
 * Card partials
 * ---------------------------------------------------------------------- */

/**
 * Faculty card.
 *
 * @param WP_Post $person Faculty post.
 */
function xgi_faculty_card( $person ) {
	$role       = get_post_meta( $person->ID, 'xgi_role', true );
	$department = get_post_meta( $person->ID, 'xgi_department', true );
	$leadership = get_post_meta( $person->ID, 'xgi_leadership', true );
	$lab        = get_post_meta( $person->ID, 'xgi_lab', true );
	$email      = get_post_meta( $person->ID, 'xgi_email', true );
	$website    = get_post_meta( $person->ID, 'xgi_website', true );
	$keywords   = array_slice( (array) get_post_meta( $person->ID, 'xgi_keywords', true ), 0, 4 );
	?>
	<div class="card faculty-card">
		<div class="faculty-card__media">
			<?php if ( has_post_thumbnail( $person ) ) : ?>
				<?php echo get_the_post_thumbnail( $person, 'xgi-portrait', array( 'loading' => 'lazy', 'alt' => esc_attr( $person->post_title ) ) ); ?>
			<?php else : ?>
				<span class="faculty-card__initials" aria-hidden="true"><?php echo esc_html( xgi_initials( $person->post_title ) ); ?></span>
			<?php endif; ?>
		</div>
		<div class="card__body">
			<?php if ( $leadership ) : ?>
				<p class="faculty-card__role"><?php echo esc_html( $leadership ); ?></p>
			<?php endif; ?>
			<h3 class="faculty-card__name"><?php echo esc_html( $person->post_title ); ?></h3>
			<?php if ( $role ) : ?>
				<p class="faculty-card__title"><?php echo esc_html( $role ); ?></p>
			<?php endif; ?>
			<?php if ( $department ) : ?>
				<p class="faculty-card__dept"><?php echo esc_html( $department ); ?></p>
			<?php endif; ?>
			<?php if ( $lab ) : ?>
				<p class="faculty-card__lab"><?php echo esc_html( $lab ); ?></p>
			<?php endif; ?>

			<?php if ( $keywords ) : ?>
				<div class="faculty-card__tags">
					<?php foreach ( $keywords as $keyword ) : ?>
						<span class="tag"><?php echo esc_html( $keyword ); ?></span>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>

			<?php if ( $website || $email ) : ?>
				<div class="faculty-card__links">
					<?php if ( $website ) : ?>
						<a href="<?php echo esc_url( $website ); ?>" target="_blank" rel="noopener noreferrer"><?php esc_html_e( 'Website', 'xgi' ); ?></a>
					<?php endif; ?>
					<?php if ( $website && $email ) : ?>
						<span class="sep">|</span>
					<?php endif; ?>
					<?php if ( $email ) : ?>
						<a href="mailto:<?php echo esc_attr( antispambot( $email ) ); ?>"><?php esc_html_e( 'Email', 'xgi' ); ?></a>
					<?php endif; ?>
				</div>
			<?php endif; ?>
		</div>
	</div>
	<?php
}

/**
 * Event card.
 *
 * @param WP_Post $event   Event post.
 * @param string  $variant compact (home) or full (events page).
 */
function xgi_event_card( $event, $variant = 'full' ) {
	$date     = get_post_meta( $event->ID, 'xgi_date_label', true );
	$location = get_post_meta( $event->ID, 'xgi_location', true );
	$speaker  = get_post_meta( $event->ID, 'xgi_speaker', true );
	$topic    = get_post_meta( $event->ID, 'xgi_topic', true );
	$url      = get_post_meta( $event->ID, 'xgi_url', true );
	$is_past  = (bool) get_post_meta( $event->ID, 'xgi_past', true );
	$image    = get_the_post_thumbnail_url( $event, 'xgi-wide' );
	$target   = $url ? ' target="_blank" rel="noopener noreferrer"' : '';
	$href     = $url ? $url : xgi_contact_mailto();
	?>
	<article class="card event-card event-card--<?php echo esc_attr( $variant ); ?>">
		<div class="event-card__date">
			<?php if ( $image ) : ?>
				<span class="event-card__bg" style="background-image:url(<?php echo esc_url( $image ); ?>)" aria-hidden="true"></span>
				<span class="event-card__scrim" aria-hidden="true"></span>
				<span class="event-card__badge" aria-hidden="true">
					<b>NC STATE</b><span>UNIVERSITY</span>
				</span>
			<?php endif; ?>
			<span class="eyebrow eyebrow--bare"><?php echo $is_past ? esc_html__( 'Past Event', 'xgi' ) : esc_html__( 'Upcoming', 'xgi' ); ?></span>
			<span class="event-card__when"><?php echo esc_html( $date ); ?></span>
			<span class="event-card__where"><?php echo esc_html( $location ); ?></span>
		</div>
		<div class="card__body<?php echo 'full' === $variant ? ' card__body--lg' : ''; ?>">
			<h3 class="event-card__title"><?php echo esc_html( $event->post_title ); ?></h3>

			<?php if ( 'full' === $variant ) : ?>
				<dl class="event-card__meta">
					<div>
						<dt><?php esc_html_e( 'Speaker:', 'xgi' ); ?> </dt>
						<dd><?php echo esc_html( $speaker ); ?></dd>
					</div>
					<div>
						<dt><?php esc_html_e( 'Topic:', 'xgi' ); ?> </dt>
						<dd><?php echo esc_html( $topic ); ?></dd>
					</div>
				</dl>
			<?php else : ?>
				<p class="event-card__meta"><?php printf( esc_html__( 'Speaker: %s', 'xgi' ), esc_html( $speaker ) ); ?></p>
				<p class="event-card__meta" style="margin-top:0"><?php printf( esc_html__( 'Topic: %s', 'xgi' ), esc_html( $topic ) ); ?></p>
			<?php endif; ?>

			<?php if ( ! $is_past ) : ?>
				<div class="event-card__actions">
					<a href="<?php echo esc_url( $href ); ?>"<?php echo $target; // phpcs:ignore WordPress.Security.EscapeOutput ?> class="btn btn--primary btn--sm"><?php esc_html_e( 'Register', 'xgi' ); ?></a>
					<a href="<?php echo esc_url( $href ); ?>"<?php echo $target; // phpcs:ignore WordPress.Security.EscapeOutput ?> class="btn btn--outline btn--sm"><?php esc_html_e( 'Event Details', 'xgi' ); ?><?php echo 'full' === $variant ? xgi_arrow() : ''; // phpcs:ignore WordPress.Security.EscapeOutput ?></a>
				</div>
			<?php endif; ?>
		</div>
	</article>
	<?php
}

/**
 * News card, used on the home page and the news listing.
 *
 * @param WP_Post $post     Post object.
 * @param string  $heading  Heading tag to use.
 */
function xgi_news_card( $post, $heading = 'h3' ) {
	$label = get_post_meta( $post->ID, 'xgi_date_label', true );
	$tag   = in_array( $heading, array( 'h2', 'h3' ), true ) ? $heading : 'h3';
	?>
	<article class="card">
		<?php if ( has_post_thumbnail( $post ) ) : ?>
			<?php
			echo get_the_post_thumbnail(
				$post,
				'xgi-wide',
				array(
					'class'   => 'facility-card__media',
					'loading' => 'lazy',
				)
			);
			?>
		<?php else : ?>
			<?php xgi_image_placeholder( __( 'News image', 'xgi' ), 'facility-card__media' ); ?>
		<?php endif; ?>
		<div class="card__body">
			<span class="news-card__date"><?php echo esc_html( $label ? $label : get_the_date( '', $post ) ); ?></span>
			<<?php echo esc_html( $tag ); ?> class="news-card__title"><?php echo esc_html( get_the_title( $post ) ); ?></<?php echo esc_html( $tag ); ?>>
			<p class="news-card__excerpt"><?php echo esc_html( get_the_excerpt( $post ) ); ?></p>
			<a href="<?php echo esc_url( get_permalink( $post ) ); ?>" class="link-red link-red--xs" style="margin-top:1rem">
				<?php esc_html_e( 'Read more', 'xgi' ); ?><?php echo xgi_arrow(); // phpcs:ignore WordPress.Security.EscapeOutput ?>
			</a>
		</div>
	</article>
	<?php
}

/**
 * Image placeholder block, mirroring the original design.
 *
 * @param string $label Description of the intended image.
 * @param string $class Extra classes.
 */
function xgi_image_placeholder( $label, $class = '' ) {
	printf(
		'<div class="placeholder-block %1$s"><div><span class="placeholder-block__label">%2$s</span><span class="placeholder-block__desc">%3$s</span></div></div>',
		esc_attr( $class ),
		esc_html__( 'Image Placeholder', 'xgi' ),
		esc_html( $label )
	);
}

/**
 * Zero-padded research area number.
 *
 * @param WP_Post $area Area post.
 * @return string
 */
function xgi_area_number( $area ) {
	$number = $area->menu_order ? $area->menu_order : 1;
	return str_pad( (string) $number, 2, '0', STR_PAD_LEFT );
}

/**
 * Short label for the publication filter pills.
 *
 * @param WP_Post $area Area post.
 * @return string
 */
function xgi_area_short_label( $area ) {
	$map = array(
		'intelligent-wireless-networking-distributed-systems' => __( 'Wireless', 'xgi' ),
		'ai-foundations-learning'                            => __( 'AI', 'xgi' ),
		'sensing-perception-integrated-intelligence'         => __( 'Sensing', 'xgi' ),
		'communication-systems-hardware-platforms'           => __( 'Hardware', 'xgi' ),
		'autonomous-systems-applications'                    => __( 'Autonomy', 'xgi' ),
	);

	$short = isset( $map[ $area->post_name ] ) ? $map[ $area->post_name ] : $area->post_title;

	return xgi_area_number( $area ) . ' ' . $short;
}
