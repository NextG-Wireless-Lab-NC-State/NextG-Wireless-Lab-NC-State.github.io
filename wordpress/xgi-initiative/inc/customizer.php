<?php
/**
 * Customizer: every piece of standing site copy is editable here.
 *
 * @package xGI
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default hero slide image URLs (bundled with the theme).
 *
 * @return array
 */
function xgi_default_hero_slides() {
	return array(
		1 => array( XGI_URI . '/assets/images/home/cover.jpg', __( 'Close-up of an RF / microwave circuit developed at xGI', 'xgi' ) ),
		2 => array( XGI_URI . '/assets/images/home/lab-group.jpg', __( 'xGI research group in the lab', 'xgi' ) ),
		3 => array( XGI_URI . '/assets/images/home/workstation.jpg', __( 'xGI researchers at a development workstation', 'xgi' ) ),
		4 => array( XGI_URI . '/assets/images/home/research-lab.jpg', __( 'xGI researcher working in a wireless sensing lab', 'xgi' ) ),
		5 => array( XGI_URI . '/assets/images/home/conference.jpg', __( 'xGI students at a research conference', 'xgi' ) ),
	);
}

/**
 * Hero slides, honouring any Customizer overrides.
 *
 * @return array List of array( url, alt ).
 */
function xgi_hero_slides() {
	$slides = array();

	foreach ( xgi_default_hero_slides() as $i => $slide ) {
		$url = get_theme_mod( 'xgi_hero_slide_' . $i, $slide[0] );
		if ( $url ) {
			$slides[] = array(
				'url' => $url,
				'alt' => $slide[1],
			);
		}
	}

	return $slides;
}

/**
 * Register Customizer controls.
 *
 * @param WP_Customize_Manager $wp_customize Customizer instance.
 */
function xgi_customize_register( $wp_customize ) {
	$defaults = xgi_defaults();

	$wp_customize->add_panel(
		'xgi_panel',
		array(
			'title'       => __( 'xGI Initiative', 'xgi' ),
			'description' => __( 'Standing copy for the xGI site: identity, hero, mission and vision.', 'xgi' ),
			'priority'    => 20,
		)
	);

	/**
	 * Helper to add a setting plus control in one call.
	 *
	 * @param string $key     Option key without prefix.
	 * @param string $section Section id.
	 * @param string $label   Control label.
	 * @param string $type    Control type.
	 * @param string $sanitize Sanitize callback.
	 */
	$add = function ( $key, $section, $label, $type = 'text', $sanitize = 'sanitize_text_field' ) use ( $wp_customize, $defaults ) {
		$wp_customize->add_setting(
			'xgi_' . $key,
			array(
				'default'           => isset( $defaults[ $key ] ) ? $defaults[ $key ] : '',
				'sanitize_callback' => $sanitize,
				'transport'         => 'refresh',
			)
		);
		$wp_customize->add_control(
			'xgi_' . $key,
			array(
				'label'   => $label,
				'section' => $section,
				'type'    => $type,
			)
		);
	};

	// --- Identity -------------------------------------------------------
	$wp_customize->add_section(
		'xgi_identity',
		array(
			'title' => __( 'Identity & Contact', 'xgi' ),
			'panel' => 'xgi_panel',
		)
	);

	$add( 'university', 'xgi_identity', __( 'University name', 'xgi' ) );
	$add( 'initiative', 'xgi_identity', __( 'Initiative name', 'xgi' ) );
	$add( 'department', 'xgi_identity', __( 'Department line — header', 'xgi' ) );
	$add( 'department_footer', 'xgi_identity', __( 'Department line — footer', 'xgi' ) );
	$add( 'address', 'xgi_identity', __( 'Street address', 'xgi' ) );
	$add( 'contact_email', 'xgi_identity', __( 'Contact email', 'xgi' ), 'email', 'sanitize_email' );

	$wp_customize->add_setting(
		'xgi_google_fonts',
		array(
			'default'           => true,
			'sanitize_callback' => 'wp_validate_boolean',
		)
	);
	$wp_customize->add_control(
		'xgi_google_fonts',
		array(
			'label'       => __( 'Load Source Serif 4 + Inter from Google Fonts', 'xgi' ),
			'description' => __( 'Turn off to fall back to Georgia / system sans, or if you self-host the fonts.', 'xgi' ),
			'section'     => 'xgi_identity',
			'type'        => 'checkbox',
		)
	);

	// --- Home hero ------------------------------------------------------
	$wp_customize->add_section(
		'xgi_hero',
		array(
			'title' => __( 'Home Hero', 'xgi' ),
			'panel' => 'xgi_panel',
		)
	);

	$add( 'hero_eyebrow', 'xgi_hero', __( 'Eyebrow', 'xgi' ) );
	$add( 'hero_title_start', 'xgi_hero', __( 'Headline — first part', 'xgi' ) );
	$add( 'hero_title_glow', 'xgi_hero', __( 'Headline — highlighted word', 'xgi' ) );
	$add( 'hero_title_end', 'xgi_hero', __( 'Headline — last part', 'xgi' ) );
	$add( 'hero_lede', 'xgi_hero', __( 'Intro paragraph', 'xgi' ), 'textarea', 'sanitize_textarea_field' );
	$add( 'hero_stat_number', 'xgi_hero', __( 'Stat chip — number', 'xgi' ) );
	$add( 'hero_stat_label', 'xgi_hero', __( 'Stat chip — label', 'xgi' ) );

	foreach ( xgi_default_hero_slides() as $i => $slide ) {
		$wp_customize->add_setting(
			'xgi_hero_slide_' . $i,
			array(
				'default'           => $slide[0],
				'sanitize_callback' => 'esc_url_raw',
			)
		);
		$wp_customize->add_control(
			new WP_Customize_Image_Control(
				$wp_customize,
				'xgi_hero_slide_' . $i,
				array(
					/* translators: %d: slide number. */
					'label'   => sprintf( __( 'Hero slide %d', 'xgi' ), $i ),
					'section' => 'xgi_hero',
				)
			)
		);
	}

	// --- Mission & vision ----------------------------------------------
	$wp_customize->add_section(
		'xgi_statements',
		array(
			'title' => __( 'Mission & Vision', 'xgi' ),
			'panel' => 'xgi_panel',
		)
	);

	$add( 'mission', 'xgi_statements', __( 'Mission statement', 'xgi' ), 'textarea', 'sanitize_textarea_field' );
	$add( 'vision', 'xgi_statements', __( 'Vision statement', 'xgi' ), 'textarea', 'sanitize_textarea_field' );

	// --- Research -------------------------------------------------------
	$wp_customize->add_section(
		'xgi_research',
		array(
			'title' => __( 'Research Page', 'xgi' ),
			'panel' => 'xgi_panel',
		)
	);

	$add( 'research_intro', 'xgi_research', __( 'Research intro', 'xgi' ), 'textarea', 'sanitize_textarea_field' );
	$add( 'research_pitch', 'xgi_research', __( 'Red positioning statement', 'xgi' ), 'textarea', 'sanitize_textarea_field' );

	// --- News -----------------------------------------------------------
	$wp_customize->add_section(
		'xgi_news',
		array(
			'title' => __( 'News', 'xgi' ),
			'panel' => 'xgi_panel',
		)
	);

	$wp_customize->add_setting(
		'xgi_show_news',
		array(
			'default'           => true,
			'sanitize_callback' => 'wp_validate_boolean',
		)
	);
	$wp_customize->add_control(
		'xgi_show_news',
		array(
			'label'       => __( 'Show the News section on the home page', 'xgi' ),
			'description' => __( 'Shows the four most recent posts between Research and Upcoming Events. Turn off to hide the section while news content is being prepared.', 'xgi' ),
			'section'     => 'xgi_news',
			'type'        => 'checkbox',
		)
	);
}
add_action( 'customize_register', 'xgi_customize_register' );
