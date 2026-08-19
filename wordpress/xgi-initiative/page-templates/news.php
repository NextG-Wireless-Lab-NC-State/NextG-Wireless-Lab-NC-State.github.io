<?php
/**
 * Template Name: xGI — News and Updates
 *
 * Lists standard WordPress posts in the xGI layout as a single grid, newest
 * first — no featured/archive split.
 *
 * @package xGI
 */

get_header();

$xgi_posts = get_posts( array( 'posts_per_page' => 20 ) );

xgi_page_hero(
	array(
		'eyebrow' => xgi_option( 'initiative' ),
		'title'   => get_the_title(),
		'intro'   => __( 'Stay up to date with the latest research breakthroughs, partnerships, awards, and events from the xGI researchers and collaborators.', 'xgi' ),
	)
);
?>

<section class="container section section--md">
	<?php if ( $xgi_posts ) : ?>
		<div class="grid grid--3">
			<?php foreach ( $xgi_posts as $xgi_post ) : ?>
				<?php xgi_news_card( $xgi_post, 'h2' ); ?>
			<?php endforeach; ?>
		</div>
	<?php else : ?>
		<div class="card empty-state">
			<p><?php esc_html_e( 'No news yet.', 'xgi' ); ?></p>
		</div>
	<?php endif; ?>
</section>

<?php
xgi_page_body();

get_footer();
