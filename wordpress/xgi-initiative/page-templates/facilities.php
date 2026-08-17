<?php
/**
 * Template Name: xGI — Facilities and Testbeds
 *
 * @package xGI
 */

get_header();

xgi_page_hero(
	array(
		'eyebrow' => xgi_option( 'initiative' ),
		'title'   => get_the_title(),
		'intro'   => __( 'xGI provides access to advanced experimental platforms, wireless testbeds, and measurement facilities that enable the design, prototyping, and real-world validation of next-generation wireless technologies. These facilities support research across the full wireless stack, from RF hardware and antennas to large-scale networked systems and intelligent wireless applications.', 'xgi' ),
	)
);
?>

<section class="container section section--md">
	<div class="grid grid--2 grid--gap-lg">
		<?php foreach ( xgi_get_facilities() as $xgi_facility ) : ?>
			<?php
			$xgi_url = get_post_meta( $xgi_facility->ID, 'xgi_url', true );
			$xgi_tag = $xgi_url ? 'a' : 'article';
			?>
			<<?php echo esc_html( $xgi_tag ); ?> class="card facility-card"
				<?php if ( $xgi_url ) : ?>
					href="<?php echo esc_url( $xgi_url ); ?>" target="_blank" rel="noopener noreferrer"
					aria-label="<?php printf( esc_attr__( 'Visit the %s website', 'xgi' ), esc_attr( $xgi_facility->post_title ) ); ?>"
				<?php endif; ?>>

				<?php if ( has_post_thumbnail( $xgi_facility ) ) : ?>
					<?php
					echo get_the_post_thumbnail(
						$xgi_facility,
						'xgi-wide',
						array(
							'class'   => 'facility-card__media',
							'loading' => 'lazy',
							/* translators: %s: facility name. */
							'alt'     => sprintf( esc_attr__( '%s — facility photo', 'xgi' ), $xgi_facility->post_title ),
						)
					);
					?>
				<?php else : ?>
					<?php
					/* translators: %s: facility name. */
					xgi_image_placeholder( sprintf( __( '%s — facility photo', 'xgi' ), $xgi_facility->post_title ), 'facility-card__media' );
					?>
				<?php endif; ?>

				<div class="card__body card__body--lg">
					<h2 class="facility-card__title"><?php echo esc_html( $xgi_facility->post_title ); ?></h2>
					<div class="facility-card__blurb"><?php echo esc_html( wp_strip_all_tags( $xgi_facility->post_content ) ); ?></div>
				</div>
			</<?php echo esc_html( $xgi_tag ); ?>>
		<?php endforeach; ?>
	</div>
</section>

<?php
xgi_page_body();

get_footer();
