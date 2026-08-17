<?php
/**
 * Single research area.
 *
 * @package xGI
 */

get_header();

the_post();

$xgi_area     = get_post();
$xgi_keywords = (array) get_post_meta( $xgi_area->ID, 'xgi_keywords', true );
$xgi_faculty  = xgi_area_faculty( $xgi_area->ID );
$xgi_groups   = (array) get_post_meta( $xgi_area->ID, 'xgi_highlights', true );

// Flatten every group, then shuffle so highlights are not grouped by faculty.
$xgi_highlights = array();
foreach ( $xgi_groups as $xgi_group ) {
	if ( ! empty( $xgi_group['items'] ) ) {
		$xgi_highlights = array_merge( $xgi_highlights, (array) $xgi_group['items'] );
	}
}
shuffle( $xgi_highlights );

$xgi_others = array_values(
	array_filter(
		xgi_get_areas(),
		function ( $other ) use ( $xgi_area ) {
			return $other->ID !== $xgi_area->ID;
		}
	)
);

xgi_page_hero(
	array(
		/* translators: %s: zero-padded area number. */
		'eyebrow' => sprintf( __( 'Research Area %s', 'xgi' ), xgi_area_number( $xgi_area ) ),
		'title'   => get_the_title(),
	)
);
?>

<?php if ( $xgi_keywords ) : ?>
<section class="keyword-strip">
	<div class="container keyword-strip__inner">
		<?php foreach ( $xgi_keywords as $xgi_keyword ) : ?>
			<span class="tag tag--outline"><?php echo esc_html( $xgi_keyword ); ?></span>
		<?php endforeach; ?>
	</div>
</section>
<?php endif; ?>

<section class="container section section--md">
	<div class="overview">
		<h2 class="eyebrow eyebrow--lg"><?php esc_html_e( 'Overview', 'xgi' ); ?></h2>
		<div class="overview__text"><?php echo esc_html( wp_strip_all_tags( $xgi_area->post_content ) ); ?></div>
	</div>
</section>

<?php if ( $xgi_faculty ) : ?>
<section class="section--gray">
	<div class="container section section--md">
		<p class="eyebrow"><?php esc_html_e( 'Affiliated Faculties', 'xgi' ); ?></p>
		<h2 class="section-title section-title--sm" style="margin:0.5rem 0 2rem"><?php esc_html_e( 'Affiliated Faculties', 'xgi' ); ?></h2>

		<div class="grid grid--4">
			<?php foreach ( $xgi_faculty as $xgi_person ) : ?>
				<?php xgi_faculty_card( $xgi_person ); ?>
			<?php endforeach; ?>
		</div>
	</div>
</section>
<?php endif; ?>

<?php if ( $xgi_highlights ) : ?>
<section class="container section section--md">
	<div class="section-head">
		<p class="eyebrow"><?php esc_html_e( 'Highlighted Publications', 'xgi' ); ?></p>
		<a href="<?php echo esc_url( xgi_template_url( 'page-templates/publications.php' ) ); ?>" class="link-red">
			<?php esc_html_e( 'Browse all publications', 'xgi' ); ?><?php echo xgi_arrow(); // phpcs:ignore WordPress.Security.EscapeOutput ?>
		</a>
	</div>

	<ul class="citation-list">
		<?php foreach ( $xgi_highlights as $xgi_citation ) : ?>
			<li class="card citation"><?php echo esc_html( $xgi_citation ); ?></li>
		<?php endforeach; ?>
	</ul>
</section>
<?php endif; ?>

<section class="section--dark">
	<div class="container" style="padding-block:3rem">
		<p class="eyebrow" style="margin-bottom:1rem"><?php esc_html_e( 'Continue exploring', 'xgi' ); ?></p>

		<div class="grid grid--4">
			<?php foreach ( $xgi_others as $xgi_other ) : ?>
				<a href="<?php echo esc_url( get_permalink( $xgi_other ) ); ?>" class="area-nav-card">
					<span class="area-nav-card__number"><?php echo esc_html( xgi_area_number( $xgi_other ) ); ?></span>
					<span class="area-nav-card__title"><?php echo esc_html( $xgi_other->post_title ); ?></span>
					<span class="link-red link-red--xs" style="margin-top:0.5rem">
						<?php esc_html_e( 'Read more', 'xgi' ); ?><?php echo xgi_arrow(); // phpcs:ignore WordPress.Security.EscapeOutput ?>
					</span>
				</a>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<?php
get_footer();
