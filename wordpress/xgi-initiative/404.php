<?php
/**
 * 404.
 *
 * @package xGI
 */

get_header();

xgi_page_hero(
	array(
		'eyebrow' => __( 'Error 404', 'xgi' ),
		'title'   => __( 'Page not found', 'xgi' ),
		'intro'   => __( 'The page you were looking for does not exist or has moved.', 'xgi' ),
		'actions' => sprintf(
			'<a href="%1$s" class="btn btn--primary">%2$s%3$s</a>',
			esc_url( home_url( '/' ) ),
			esc_html__( 'Back to home', 'xgi' ),
			xgi_arrow()
		),
	)
);
?>

<section class="container section section--md">
	<p class="eyebrow"><?php esc_html_e( 'Try instead', 'xgi' ); ?></p>
	<h2 class="section-title section-title--sm" style="margin:0.5rem 0 2rem"><?php esc_html_e( 'Popular destinations', 'xgi' ); ?></h2>

	<div class="grid grid--3">
		<a href="<?php echo esc_url( xgi_template_url( 'page-templates/research.php' ) ); ?>" class="card area-card">
			<h3 class="area-card__title" style="margin-top:0"><?php esc_html_e( 'Research', 'xgi' ); ?></h3>
			<p class="area-card__keywords"><?php esc_html_e( 'Five research areas across the wireless stack.', 'xgi' ); ?></p>
			<span class="link-red area-card__link"><?php esc_html_e( 'Read more', 'xgi' ); ?><?php echo xgi_arrow(); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
		</a>
		<a href="<?php echo esc_url( xgi_template_url( 'page-templates/people.php' ) ); ?>" class="card area-card">
			<h3 class="area-card__title" style="margin-top:0"><?php esc_html_e( 'People', 'xgi' ); ?></h3>
			<p class="area-card__keywords"><?php esc_html_e( 'Faculty across NC State.', 'xgi' ); ?></p>
			<span class="link-red area-card__link"><?php esc_html_e( 'Read more', 'xgi' ); ?><?php echo xgi_arrow(); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
		</a>
		<a href="<?php echo esc_url( xgi_template_url( 'page-templates/publications.php' ) ); ?>" class="card area-card">
			<h3 class="area-card__title" style="margin-top:0"><?php esc_html_e( 'Publications', 'xgi' ); ?></h3>
			<p class="area-card__keywords"><?php esc_html_e( 'Selected papers, filterable by research area.', 'xgi' ); ?></p>
			<span class="link-red area-card__link"><?php esc_html_e( 'Read more', 'xgi' ); ?><?php echo xgi_arrow(); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
		</a>
	</div>

	<div style="margin-top:2.5rem"><?php get_search_form(); ?></div>
</section>

<?php
get_footer();
