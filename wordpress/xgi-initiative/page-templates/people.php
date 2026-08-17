<?php
/**
 * Template Name: xGI — People
 *
 * @package xGI
 */

get_header();

$xgi_intro = __( 'xGI community brings together faculty across NC State University working at the forefront of next-generation wireless technologies. Our researchers span multiple disciplines — from RF hardware, circuits, and antennas to communication systems, networking, AI/ML, security, and emerging applications, such as robotics. Through close collaboration across these areas, xGI researchers address challenges across the entire wireless stack, combining fundamental research with system design and large-scale experimentation to advance future 6G communications and wireless-enabled systems.', 'xgi' );

$xgi_all        = xgi_get_faculty();
$xgi_leadership = array();
$xgi_associated = array();

foreach ( $xgi_all as $xgi_person ) {
	if ( get_post_meta( $xgi_person->ID, 'xgi_leadership', true ) ) {
		$xgi_leadership[] = $xgi_person;
	} else {
		$xgi_associated[] = $xgi_person;
	}
}

$xgi_associated = xgi_sort_by_surname( $xgi_associated );

xgi_page_hero(
	array(
		'eyebrow' => xgi_option( 'initiative' ),
		'title'   => get_the_title(),
		'intro'   => $xgi_intro,
	)
);
?>

<section class="container section section--md">
	<p class="eyebrow"><?php esc_html_e( 'Leadership', 'xgi' ); ?></p>
	<h2 class="section-title section-title--sm" style="margin:0.5rem 0 2rem"><?php esc_html_e( 'Initiative Directors', 'xgi' ); ?></h2>

	<div class="leadership-list">
		<?php foreach ( $xgi_leadership as $xgi_person ) : ?>
			<?php xgi_faculty_card( $xgi_person ); ?>
		<?php endforeach; ?>
	</div>
</section>

<section class="section--gray">
	<div class="container section section--md">
		<p class="eyebrow"><?php esc_html_e( 'Faculty', 'xgi' ); ?></p>
		<h2 class="section-title section-title--sm" style="margin:0.5rem 0 2rem"><?php esc_html_e( 'Associated Faculty', 'xgi' ); ?></h2>

		<div class="grid grid--4">
			<?php foreach ( $xgi_associated as $xgi_person ) : ?>
				<?php xgi_faculty_card( $xgi_person ); ?>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<?php
xgi_page_body();

get_footer();
