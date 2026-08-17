<?php
/**
 * Content model: research areas, faculty, publications, events, facilities.
 *
 * Everything the original site hard-coded in JavaScript data files lives here as
 * ordinary WordPress content so it can be edited in wp-admin.
 *
 * @package xGI
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register the custom post types.
 */
function xgi_register_post_types() {

	// Research areas — the only publicly addressable custom type (/research/{slug}).
	register_post_type(
		'xgi_area',
		array(
			'labels'        => xgi_cpt_labels( __( 'Research Area', 'xgi' ), __( 'Research Areas', 'xgi' ) ),
			'public'        => true,
			'has_archive'   => false,
			'hierarchical'  => false,
			'menu_icon'     => 'dashicons-networking',
			'menu_position' => 21,
			'supports'      => array( 'title', 'editor', 'excerpt', 'thumbnail', 'page-attributes', 'revisions' ),
			'rewrite'       => array(
				'slug'       => 'research',
				'with_front' => false,
			),
			'show_in_rest'  => true,
		)
	);

	register_post_type(
		'xgi_faculty',
		array(
			'labels'              => xgi_cpt_labels( __( 'Faculty Member', 'xgi' ), __( 'Faculty', 'xgi' ) ),
			'public'              => false,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'publicly_queryable'  => false,
			'exclude_from_search' => true,
			'menu_icon'           => 'dashicons-groups',
			'menu_position'       => 22,
			'supports'            => array( 'title', 'thumbnail', 'page-attributes', 'revisions' ),
			'show_in_rest'        => true,
		)
	);

	register_post_type(
		'xgi_publication',
		array(
			'labels'              => xgi_cpt_labels( __( 'Publication', 'xgi' ), __( 'Publications', 'xgi' ) ),
			'public'              => false,
			'show_ui'             => true,
			'publicly_queryable'  => false,
			'exclude_from_search' => true,
			'menu_icon'           => 'dashicons-media-document',
			'menu_position'       => 23,
			'supports'            => array( 'title', 'page-attributes' ),
			'show_in_rest'        => true,
		)
	);

	register_post_type(
		'xgi_event',
		array(
			'labels'              => xgi_cpt_labels( __( 'Event', 'xgi' ), __( 'Events', 'xgi' ) ),
			'public'              => false,
			'show_ui'             => true,
			'publicly_queryable'  => false,
			'exclude_from_search' => true,
			'menu_icon'           => 'dashicons-calendar-alt',
			'menu_position'       => 24,
			'supports'            => array( 'title', 'thumbnail', 'page-attributes' ),
			'show_in_rest'        => true,
		)
	);

	register_post_type(
		'xgi_facility',
		array(
			'labels'              => xgi_cpt_labels( __( 'Facility', 'xgi' ), __( 'Facilities', 'xgi' ) ),
			'public'              => false,
			'show_ui'             => true,
			'publicly_queryable'  => false,
			'exclude_from_search' => true,
			'menu_icon'           => 'dashicons-building',
			'menu_position'       => 25,
			'supports'            => array( 'title', 'editor', 'thumbnail', 'page-attributes' ),
			'show_in_rest'        => true,
		)
	);
}
add_action( 'init', 'xgi_register_post_types' );

/**
 * Build a standard label set.
 *
 * @param string $singular Singular name.
 * @param string $plural   Plural name.
 * @return array
 */
function xgi_cpt_labels( $singular, $plural ) {
	return array(
		'name'               => $plural,
		'singular_name'      => $singular,
		'menu_name'          => $plural,
		'add_new'            => __( 'Add New', 'xgi' ),
		/* translators: %s: singular post type name. */
		'add_new_item'       => sprintf( __( 'Add New %s', 'xgi' ), $singular ),
		/* translators: %s: singular post type name. */
		'edit_item'          => sprintf( __( 'Edit %s', 'xgi' ), $singular ),
		/* translators: %s: singular post type name. */
		'new_item'           => sprintf( __( 'New %s', 'xgi' ), $singular ),
		/* translators: %s: singular post type name. */
		'view_item'          => sprintf( __( 'View %s', 'xgi' ), $singular ),
		/* translators: %s: plural post type name. */
		'search_items'       => sprintf( __( 'Search %s', 'xgi' ), $plural ),
		/* translators: %s: plural post type name. */
		'not_found'          => sprintf( __( 'No %s found', 'xgi' ), strtolower( $plural ) ),
		'all_items'          => $plural,
	);
}

/* -------------------------------------------------------------------------
 * Custom fields
 * ---------------------------------------------------------------------- */

/**
 * Field definitions, keyed by post type.
 *
 * Supported types: text, textarea, url, email, checkbox, lines, groups, area.
 *
 * @return array
 */
function xgi_field_schema() {
	return array(
		'xgi_area'        => array(
			'title'   => __( 'Research Area Details', 'xgi' ),
			'fields'  => array(
				'xgi_keywords'   => array(
					'label' => __( 'Keywords', 'xgi' ),
					'type'  => 'lines',
					'help'  => __( 'One keyword per line. Shown as chips and in the card summary.', 'xgi' ),
				),
				'xgi_faculty'    => array(
					'label' => __( 'Affiliated faculty', 'xgi' ),
					'type'  => 'lines',
					'help'  => __( 'One faculty slug per line, in display order (e.g. ismail-guvenc).', 'xgi' ),
				),
				'xgi_highlights' => array(
					'label' => __( 'Highlighted publications', 'xgi' ),
					'type'  => 'groups',
					'help'  => __( 'Group headings start with "# ", citations start with "- ".', 'xgi' ),
				),
			),
			'notice'  => __( 'The overview paragraph is the main editor content. The area number is the "Order" field under Page Attributes.', 'xgi' ),
		),
		'xgi_faculty'     => array(
			'title'  => __( 'Faculty Details', 'xgi' ),
			'fields' => array(
				'xgi_role'       => array(
					'label' => __( 'Academic title', 'xgi' ),
					'type'  => 'text',
					'help'  => __( 'e.g. Associate Professor', 'xgi' ),
				),
				'xgi_department' => array(
					'label' => __( 'Department', 'xgi' ),
					'type'  => 'text',
				),
				'xgi_leadership' => array(
					'label' => __( 'Leadership role', 'xgi' ),
					'type'  => 'text',
					'help'  => __( 'e.g. Director. Leave blank for associated faculty.', 'xgi' ),
				),
				'xgi_lab'        => array(
					'label' => __( 'Lab', 'xgi' ),
					'type'  => 'text',
				),
				'xgi_keywords'   => array(
					'label' => __( 'Keywords', 'xgi' ),
					'type'  => 'lines',
					'help'  => __( 'One per line. The first four appear on the card.', 'xgi' ),
				),
				'xgi_email'      => array(
					'label' => __( 'Email', 'xgi' ),
					'type'  => 'email',
				),
				'xgi_website'    => array(
					'label' => __( 'Website', 'xgi' ),
					'type'  => 'url',
				),
			),
			'notice' => __( 'The portrait is the Featured Image. Faculty without a portrait fall back to their initials.', 'xgi' ),
		),
		'xgi_publication' => array(
			'title'  => __( 'Publication Details', 'xgi' ),
			'fields' => array(
				'xgi_authors'      => array(
					'label' => __( 'Authors', 'xgi' ),
					'type'  => 'textarea',
				),
				'xgi_venue'        => array(
					'label' => __( 'Venue', 'xgi' ),
					'type'  => 'textarea',
				),
				'xgi_award'        => array(
					'label' => __( 'Award', 'xgi' ),
					'type'  => 'text',
					'help'  => __( 'Leave blank if none. Awarded papers get a red badge and can be filtered.', 'xgi' ),
				),
				'xgi_faculty_name' => array(
					'label' => __( 'Faculty', 'xgi' ),
					'type'  => 'text',
				),
				'xgi_area_slug'    => array(
					'label' => __( 'Research area', 'xgi' ),
					'type'  => 'area',
				),
			),
		),
		'xgi_event'       => array(
			'title'  => __( 'Event Details', 'xgi' ),
			'fields' => array(
				'xgi_date_label' => array(
					'label' => __( 'Date label', 'xgi' ),
					'type'  => 'text',
					'help'  => __( 'Displayed verbatim, e.g. "Oct 13–14, 2026".', 'xgi' ),
				),
				'xgi_location'   => array(
					'label' => __( 'Location', 'xgi' ),
					'type'  => 'text',
				),
				'xgi_speaker'    => array(
					'label' => __( 'Speaker', 'xgi' ),
					'type'  => 'text',
				),
				'xgi_topic'      => array(
					'label' => __( 'Topic', 'xgi' ),
					'type'  => 'textarea',
				),
				'xgi_url'        => array(
					'label' => __( 'Registration / details URL', 'xgi' ),
					'type'  => 'url',
					'help'  => __( 'Leave blank to fall back to the contact email.', 'xgi' ),
				),
				'xgi_past'       => array(
					'label' => __( 'This event has already happened', 'xgi' ),
					'type'  => 'checkbox',
				),
			),
			'notice' => __( 'The image behind the date block is the Featured Image.', 'xgi' ),
		),
		'xgi_facility'    => array(
			'title'  => __( 'Facility Details', 'xgi' ),
			'fields' => array(
				'xgi_url' => array(
					'label' => __( 'External website', 'xgi' ),
					'type'  => 'url',
					'help'  => __( 'If set, the whole card links here.', 'xgi' ),
				),
			),
			'notice' => __( 'The description is the main editor content; the photo is the Featured Image.', 'xgi' ),
		),
	);
}

/**
 * Register meta so it is available over REST and properly sanitized.
 */
function xgi_register_meta() {
	foreach ( xgi_field_schema() as $post_type => $box ) {
		foreach ( $box['fields'] as $key => $field ) {
			$single = ! in_array( $field['type'], array( 'lines', 'groups' ), true );

			register_post_meta(
				$post_type,
				$key,
				array(
					'type'              => $single ? 'string' : 'array',
					'single'            => true,
					'show_in_rest'      => $single,
					'sanitize_callback' => $single ? 'xgi_sanitize_meta_scalar' : null,
					'auth_callback'     => function () {
						return current_user_can( 'edit_posts' );
					},
				)
			);
		}
	}
}
add_action( 'init', 'xgi_register_meta' );

/**
 * Sanitize a scalar meta value.
 *
 * @param mixed $value Raw value.
 * @return string
 */
function xgi_sanitize_meta_scalar( $value ) {
	return is_scalar( $value ) ? sanitize_text_field( (string) $value ) : '';
}

/**
 * Add the meta boxes.
 */
function xgi_add_meta_boxes() {
	foreach ( xgi_field_schema() as $post_type => $box ) {
		add_meta_box(
			'xgi-details-' . $post_type,
			$box['title'],
			'xgi_render_meta_box',
			$post_type,
			'normal',
			'high',
			array( 'post_type' => $post_type )
		);
	}
}
add_action( 'add_meta_boxes', 'xgi_add_meta_boxes' );

/**
 * Render the meta box.
 *
 * @param WP_Post $post Current post.
 * @param array   $args Callback args.
 */
function xgi_render_meta_box( $post, $args ) {
	$schema = xgi_field_schema();
	$box    = $schema[ $args['args']['post_type'] ];

	wp_nonce_field( 'xgi_save_meta', 'xgi_meta_nonce' );

	echo '<style>.xgi-field{margin:0 0 18px}.xgi-field label{display:block;font-weight:600;margin-bottom:4px}.xgi-field input[type=text],.xgi-field input[type=url],.xgi-field input[type=email],.xgi-field textarea,.xgi-field select{width:100%;max-width:720px}.xgi-field p.description{margin-top:4px}</style>';

	if ( ! empty( $box['notice'] ) ) {
		echo '<p class="description" style="margin-bottom:16px"><strong>' . esc_html( $box['notice'] ) . '</strong></p>';
	}

	foreach ( $box['fields'] as $key => $field ) {
		$value = get_post_meta( $post->ID, $key, true );
		echo '<div class="xgi-field">';
		printf( '<label for="%1$s">%2$s</label>', esc_attr( $key ), esc_html( $field['label'] ) );

		switch ( $field['type'] ) {
			case 'textarea':
				printf(
					'<textarea id="%1$s" name="%1$s" rows="3">%2$s</textarea>',
					esc_attr( $key ),
					esc_textarea( is_string( $value ) ? $value : '' )
				);
				break;

			case 'lines':
				printf(
					'<textarea id="%1$s" name="%1$s" rows="6">%2$s</textarea>',
					esc_attr( $key ),
					esc_textarea( implode( "\n", (array) $value ) )
				);
				break;

			case 'groups':
				printf(
					'<textarea id="%1$s" name="%1$s" rows="14">%2$s</textarea>',
					esc_attr( $key ),
					esc_textarea( xgi_groups_to_text( (array) $value ) )
				);
				break;

			case 'checkbox':
				printf(
					'<label style="font-weight:400"><input type="checkbox" id="%1$s" name="%1$s" value="1" %2$s> %3$s</label>',
					esc_attr( $key ),
					checked( $value, '1', false ),
					esc_html( $field['label'] )
				);
				break;

			case 'area':
				$areas = get_posts(
					array(
						'post_type'      => 'xgi_area',
						'posts_per_page' => -1,
						'orderby'        => 'menu_order',
						'order'          => 'ASC',
					)
				);
				printf( '<select id="%1$s" name="%1$s">', esc_attr( $key ) );
				echo '<option value="">' . esc_html__( '— none —', 'xgi' ) . '</option>';
				foreach ( $areas as $area ) {
					printf(
						'<option value="%1$s" %2$s>%3$s</option>',
						esc_attr( $area->post_name ),
						selected( $value, $area->post_name, false ),
						esc_html( $area->post_title )
					);
				}
				echo '</select>';
				break;

			case 'url':
			case 'email':
			default:
				printf(
					'<input type="%1$s" id="%2$s" name="%2$s" value="%3$s">',
					esc_attr( 'text' === $field['type'] ? 'text' : $field['type'] ),
					esc_attr( $key ),
					esc_attr( is_string( $value ) ? $value : '' )
				);
				break;
		}

		if ( ! empty( $field['help'] ) ) {
			echo '<p class="description">' . esc_html( $field['help'] ) . '</p>';
		}

		echo '</div>';
	}
}

/**
 * Persist the meta box values.
 *
 * @param int $post_id Post ID.
 */
function xgi_save_meta( $post_id ) {
	if ( ! isset( $_POST['xgi_meta_nonce'] ) ) {
		return;
	}
	if ( ! wp_verify_nonce( sanitize_key( wp_unslash( $_POST['xgi_meta_nonce'] ) ), 'xgi_save_meta' ) ) {
		return;
	}
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}

	$schema    = xgi_field_schema();
	$post_type = get_post_type( $post_id );

	if ( ! isset( $schema[ $post_type ] ) ) {
		return;
	}

	foreach ( $schema[ $post_type ]['fields'] as $key => $field ) {
		switch ( $field['type'] ) {
			case 'checkbox':
				if ( ! empty( $_POST[ $key ] ) ) {
					update_post_meta( $post_id, $key, '1' );
				} else {
					delete_post_meta( $post_id, $key );
				}
				break;

			case 'lines':
				$raw   = isset( $_POST[ $key ] ) ? sanitize_textarea_field( wp_unslash( $_POST[ $key ] ) ) : '';
				$lines = array_values( array_filter( array_map( 'trim', preg_split( '/\r\n|\r|\n/', $raw ) ) ) );
				update_post_meta( $post_id, $key, $lines );
				break;

			case 'groups':
				$raw = isset( $_POST[ $key ] ) ? sanitize_textarea_field( wp_unslash( $_POST[ $key ] ) ) : '';
				update_post_meta( $post_id, $key, xgi_text_to_groups( $raw ) );
				break;

			case 'url':
				$value = isset( $_POST[ $key ] ) ? esc_url_raw( wp_unslash( $_POST[ $key ] ) ) : '';
				update_post_meta( $post_id, $key, $value );
				break;

			case 'email':
				$value = isset( $_POST[ $key ] ) ? sanitize_email( wp_unslash( $_POST[ $key ] ) ) : '';
				update_post_meta( $post_id, $key, $value );
				break;

			case 'textarea':
				$value = isset( $_POST[ $key ] ) ? sanitize_textarea_field( wp_unslash( $_POST[ $key ] ) ) : '';
				update_post_meta( $post_id, $key, $value );
				break;

			default:
				$value = isset( $_POST[ $key ] ) ? sanitize_text_field( wp_unslash( $_POST[ $key ] ) ) : '';
				update_post_meta( $post_id, $key, $value );
				break;
		}
	}
}
add_action( 'save_post', 'xgi_save_meta' );

/**
 * Serialize publication groups to the editable text format.
 *
 * @param array $groups Groups.
 * @return string
 */
function xgi_groups_to_text( $groups ) {
	$out = array();
	foreach ( $groups as $group ) {
		if ( empty( $group['faculty'] ) ) {
			continue;
		}
		$out[] = '# ' . $group['faculty'];
		foreach ( (array) ( isset( $group['items'] ) ? $group['items'] : array() ) as $item ) {
			$out[] = '- ' . $item;
		}
		$out[] = '';
	}
	return trim( implode( "\n", $out ) );
}

/**
 * Parse the editable text format back into groups.
 *
 * @param string $text Raw textarea value.
 * @return array
 */
function xgi_text_to_groups( $text ) {
	$groups  = array();
	$current = null;

	foreach ( preg_split( '/\r\n|\r|\n/', (string) $text ) as $line ) {
		$line = trim( $line );
		if ( '' === $line ) {
			continue;
		}
		if ( 0 === strpos( $line, '#' ) ) {
			if ( $current ) {
				$groups[] = $current;
			}
			$current = array(
				'faculty' => trim( ltrim( $line, '#' ) ),
				'items'   => array(),
			);
		} elseif ( 0 === strpos( $line, '-' ) && $current ) {
			$current['items'][] = trim( ltrim( $line, '-' ) );
		} elseif ( $current ) {
			$current['items'][] = $line;
		}
	}

	if ( $current ) {
		$groups[] = $current;
	}

	return $groups;
}

/**
 * Admin columns that make the lists usable.
 *
 * @param array $columns Existing columns.
 * @return array
 */
function xgi_faculty_columns( $columns ) {
	$new = array();
	foreach ( $columns as $key => $label ) {
		$new[ $key ] = $label;
		if ( 'title' === $key ) {
			$new['xgi_role']       = __( 'Title', 'xgi' );
			$new['xgi_department'] = __( 'Department', 'xgi' );
			$new['xgi_leadership'] = __( 'Leadership', 'xgi' );
		}
	}
	return $new;
}
add_filter( 'manage_xgi_faculty_posts_columns', 'xgi_faculty_columns' );

/**
 * Render the custom faculty columns.
 *
 * @param string $column  Column key.
 * @param int    $post_id Post ID.
 */
function xgi_faculty_column_content( $column, $post_id ) {
	if ( 0 === strpos( $column, 'xgi_' ) ) {
		echo esc_html( get_post_meta( $post_id, $column, true ) );
	}
}
add_action( 'manage_xgi_faculty_posts_custom_column', 'xgi_faculty_column_content', 10, 2 );

/**
 * Publication list columns.
 *
 * @param array $columns Existing columns.
 * @return array
 */
function xgi_publication_columns( $columns ) {
	$new = array();
	foreach ( $columns as $key => $label ) {
		$new[ $key ] = $label;
		if ( 'title' === $key ) {
			$new['xgi_faculty_name'] = __( 'Faculty', 'xgi' );
			$new['xgi_area_slug']    = __( 'Research Area', 'xgi' );
			$new['xgi_award']        = __( 'Award', 'xgi' );
		}
	}
	return $new;
}
add_filter( 'manage_xgi_publication_posts_columns', 'xgi_publication_columns' );
add_action(
	'manage_xgi_publication_posts_custom_column',
	'xgi_faculty_column_content',
	10,
	2
);
