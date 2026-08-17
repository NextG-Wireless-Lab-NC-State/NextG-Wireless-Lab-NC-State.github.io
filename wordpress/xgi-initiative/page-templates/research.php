<?php
/**
 * Template Name: xGI — Research hub
 *
 * @package xGI
 */

get_header();

xgi_page_hero(
	array(
		'eyebrow' => xgi_option( 'initiative' ),
		'title'   => get_the_title(),
		'intro'   => xgi_option( 'research_intro' ),
	)
);
?>

<section class="section--red">
	<div class="container" style="padding-block:3rem">
		<p class="vision__text" style="font-size:1.5rem;margin-top:0"><?php echo esc_html( xgi_option( 'research_pitch' ) ); ?></p>
	</div>
</section>

<section class="container section section--md">
	<p class="eyebrow"><?php esc_html_e( 'Research Areas', 'xgi' ); ?></p>
	<h2 class="section-title section-title--sm" style="margin:0.5rem 0 2rem"><?php esc_html_e( 'Five interconnected thrusts', 'xgi' ); ?></h2>

	<div class="grid grid--2-md grid--gap-lg">
		<?php foreach ( xgi_get_areas() as $xgi_area ) : ?>
			<?php $xgi_keywords = (array) get_post_meta( $xgi_area->ID, 'xgi_keywords', true ); ?>
			<a href="<?php echo esc_url( get_permalink( $xgi_area ) ); ?>" class="card area-row">
				<span class="area-row__head">
					<span class="area-row__number"><?php echo esc_html( xgi_area_number( $xgi_area ) ); ?></span>
					<span class="area-row__title"><?php echo esc_html( $xgi_area->post_title ); ?></span>
				</span>

				<?php if ( $xgi_keywords ) : ?>
					<span class="tag-list">
						<?php foreach ( $xgi_keywords as $xgi_keyword ) : ?>
							<span class="tag"><?php echo esc_html( $xgi_keyword ); ?></span>
						<?php endforeach; ?>
					</span>
				<?php endif; ?>

				<span class="link-red" style="margin-top:1.5rem">
					<?php esc_html_e( 'Read more', 'xgi' ); ?><?php echo xgi_arrow(); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				</span>
			</a>
		<?php endforeach; ?>
	</div>
</section>

<?php
xgi_page_body();

get_footer();
