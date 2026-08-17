<?php
/**
 * Template Name: xGI — Publications
 *
 * @package xGI
 */

get_header();

$xgi_pubs  = xgi_get_publications();
$xgi_areas = xgi_get_areas();
$xgi_total = count( $xgi_pubs );

// Publication counts per area, for the filter pills.
$xgi_counts = array();
foreach ( $xgi_pubs as $xgi_pub ) {
	$xgi_slug                = get_post_meta( $xgi_pub->ID, 'xgi_area_slug', true );
	$xgi_counts[ $xgi_slug ] = isset( $xgi_counts[ $xgi_slug ] ) ? $xgi_counts[ $xgi_slug ] + 1 : 1;
}

xgi_page_hero(
	array(
		'eyebrow' => __( 'Research Output', 'xgi' ),
		'title'   => get_the_title(),
		'intro'   => __( "Selected publications from xGI faculty across the initiative's five research areas, including journal articles, conference papers, and books. Filter by research area.", 'xgi' ),
	)
);
?>

<section class="container section section--md">
	<div class="pub-explorer" data-xgi-publications>

		<div class="pub-filters">
			<span class="pub-filters__label"><?php esc_html_e( 'Research Area', 'xgi' ); ?></span>
			<div class="pub-filters__pills" role="group" aria-label="<?php esc_attr_e( 'Filter by research area', 'xgi' ); ?>">
				<button type="button" class="pill is-active" data-area="all" aria-pressed="true">
					<?php esc_html_e( 'All', 'xgi' ); ?><span class="pill__count"> (<?php echo (int) $xgi_total; ?>)</span>
				</button>
				<?php foreach ( $xgi_areas as $xgi_area ) : ?>
					<button type="button" class="pill" data-area="<?php echo esc_attr( $xgi_area->post_name ); ?>"
						data-title="<?php echo esc_attr( $xgi_area->post_title ); ?>" aria-pressed="false">
						<?php echo esc_html( xgi_area_short_label( $xgi_area ) ); ?>
						<span class="pill__count"> (<?php echo isset( $xgi_counts[ $xgi_area->post_name ] ) ? (int) $xgi_counts[ $xgi_area->post_name ] : 0; ?>)</span>
					</button>
				<?php endforeach; ?>
			</div>

			<label class="pub-filters__toggle">
				<input type="checkbox" data-xgi-awards>
				<span><?php esc_html_e( 'Award-winning only', 'xgi' ); ?></span>
			</label>
		</div>

		<div class="pub-status">
			<p data-xgi-count>
				<?php
				printf(
					/* translators: %s: number of publications. */
					esc_html__( 'Showing %s publications.', 'xgi' ),
					'<b>' . (int) $xgi_total . '</b>'
				);
				?>
			</p>
			<button type="button" class="link-red link-red--xs" data-xgi-reset hidden><?php esc_html_e( 'Reset filters', 'xgi' ); ?></button>
		</div>

		<div class="pub-list">
			<?php foreach ( $xgi_pubs as $xgi_pub ) : ?>
				<?php
				$xgi_authors   = get_post_meta( $xgi_pub->ID, 'xgi_authors', true );
				$xgi_venue     = get_post_meta( $xgi_pub->ID, 'xgi_venue', true );
				$xgi_award     = get_post_meta( $xgi_pub->ID, 'xgi_award', true );
				$xgi_area_slug = get_post_meta( $xgi_pub->ID, 'xgi_area_slug', true );
				$xgi_area      = xgi_get_area_by_slug( $xgi_area_slug );
				?>
				<article class="card pub-item" data-area="<?php echo esc_attr( $xgi_area_slug ); ?>" data-award="<?php echo $xgi_award ? '1' : '0'; ?>">
					<?php if ( $xgi_award ) : ?>
						<span class="pub-item__award">★ <?php echo esc_html( $xgi_award ); ?></span>
					<?php endif; ?>

					<h2 class="pub-item__title"><?php echo esc_html( $xgi_pub->post_title ); ?></h2>

					<?php if ( $xgi_authors ) : ?>
						<p class="pub-item__authors"><b><?php esc_html_e( 'Authors:', 'xgi' ); ?></b> <?php echo esc_html( $xgi_authors ); ?></p>
					<?php endif; ?>

					<?php if ( $xgi_venue ) : ?>
						<p class="pub-item__venue"><b><?php esc_html_e( 'Venue:', 'xgi' ); ?></b> <?php echo esc_html( $xgi_venue ); ?></p>
					<?php endif; ?>

					<?php if ( $xgi_area ) : ?>
						<a class="pub-item__area" href="<?php echo esc_url( get_permalink( $xgi_area ) ); ?>">
							<?php
							printf(
								/* translators: 1: area number, 2: area title. */
								esc_html__( 'Area %1$s · %2$s', 'xgi' ),
								esc_html( xgi_area_number( $xgi_area ) ),
								esc_html( $xgi_area->post_title )
							);
							?>
						</a>
					<?php endif; ?>
				</article>
			<?php endforeach; ?>
		</div>

		<p class="card pub-empty" data-xgi-empty hidden><?php esc_html_e( 'No publications match the selected filters.', 'xgi' ); ?></p>
	</div>
</section>

<?php
xgi_page_body();

get_footer();
