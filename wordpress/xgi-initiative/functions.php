<?php
/**
 * xGI Initiative theme bootstrap.
 *
 * @package xGI
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'XGI_VERSION', '1.0.0' );
define( 'XGI_DIR', get_template_directory() );
define( 'XGI_URI', get_template_directory_uri() );

require_once XGI_DIR . '/inc/post-types.php';
require_once XGI_DIR . '/inc/template-tags.php';
require_once XGI_DIR . '/inc/customizer.php';
require_once XGI_DIR . '/inc/importer.php';

/**
 * Theme supports, menus, image sizes.
 */
function xgi_setup() {
	load_theme_textdomain( 'xgi', XGI_DIR . '/languages' );

	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'customize-selective-refresh-widgets' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'align-wide' );
	add_theme_support(
		'html5',
		array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' )
	);

	add_image_size( 'xgi-portrait', 640, 640, true );
	add_image_size( 'xgi-wide', 1200, 675, true );

	register_nav_menus(
		array(
			'primary' => __( 'Primary Navigation', 'xgi' ),
			'footer'  => __( 'Footer — Explore', 'xgi' ),
		)
	);
}
add_action( 'after_setup_theme', 'xgi_setup' );

/**
 * Front-end assets.
 */
function xgi_assets() {
	if ( xgi_option( 'google_fonts', true ) ) {
		wp_enqueue_style(
			'xgi-fonts',
			'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700;8..60,800;8..60,900&display=swap',
			array(),
			null
		);
	}

	wp_enqueue_style( 'xgi-style', get_stylesheet_uri(), array(), XGI_VERSION );

	wp_enqueue_script( 'xgi-script', XGI_URI . '/assets/js/xgi.js', array(), XGI_VERSION, true );
	wp_localize_script(
		'xgi-script',
		'xgiL10n',
		array(
			'publicationSingular' => __( 'publication', 'xgi' ),
			'publicationPlural'   => __( 'publications', 'xgi' ),
			'showing'             => __( 'Showing', 'xgi' ),
			'inArea'              => __( 'in', 'xgi' ),
			'showMore'            => __( 'Show more', 'xgi' ),
			'showLess'            => __( 'Show less', 'xgi' ),
		)
	);
}
add_action( 'wp_enqueue_scripts', 'xgi_assets' );

/**
 * Editor styles so the block editor roughly matches the front end.
 */
function xgi_editor_assets() {
	add_editor_style( 'assets/css/editor.css' );
}
add_action( 'after_setup_theme', 'xgi_editor_assets' );

/**
 * Body classes used by the stylesheet.
 *
 * @param array $classes Existing classes.
 * @return array
 */
function xgi_body_classes( $classes ) {
	if ( is_front_page() ) {
		$classes[] = 'is-home';
	}
	return $classes;
}
add_filter( 'body_class', 'xgi_body_classes' );

/**
 * Excerpt tweaks.
 */
add_filter( 'excerpt_more', function () {
	return '…';
} );

add_filter( 'excerpt_length', function () {
	return 28;
} );

/**
 * Widget area used on the blog/news sidebar (optional).
 */
function xgi_widgets_init() {
	register_sidebar(
		array(
			'name'          => __( 'Sidebar', 'xgi' ),
			'id'            => 'sidebar-1',
			'description'   => __( 'Shown alongside standard posts.', 'xgi' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title eyebrow">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'xgi_widgets_init' );
