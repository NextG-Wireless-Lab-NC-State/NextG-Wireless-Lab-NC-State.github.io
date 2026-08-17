<?php
/**
 * Template Name: xGI — News and Updates
 *
 * Lists standard WordPress posts in the xGI layout. The original site keeps this
 * page out of the navigation until final content is ready.
 *
 * @package xGI
 */

get_header();

$xgi_posts  = get_posts( array( 'posts_per_page' => 20 ) );
$xgi_latest = array_slice( $xgi_posts, 0, 2 );
$xgi_older  = array_slice( $xgi_posts, 2 );

xgi_page_hero(
	array(
		'eyebrow' => xgi_option( 'initiative' ),
		'title'   => get_the_title(),
		'intro'   => __( 'Stay up to date with the latest research breakthroughs, partnerships, awards, and events from the xGI researchers and collaborators.', 'xgi' ),
	)
);
?>

<section class="container section section--md">
	<p class="eyebrow"><?php esc_html_e( 'Latest News', 'xgi' ); ?></p>
	<h2 class="section-title section-title--sm" style="margin:0.5rem 0 2rem"><?php esc_html_e( 'Recent highlights', 'xgi' ); ?></h2>

	<?php if ( $xgi_latest ) : ?>
		<div class="grid grid--2">
			<?php foreach ( $xgi_latest as $xgi_post ) : ?>
				<?php xgi_news_card( $xgi_post, 'h2' ); ?>
			<?php endforeach; ?>
		</div>
	<?php else : ?>
		<div class="card empty-state">
			<p><?php esc_html_e( 'No news yet.', 'xgi' ); ?></p>
		</div>
	<?php endif; ?>
</section>

<?php if ( $xgi_older ) : ?>
<section class="section--gray">
	<div class="container section section--md">
		<p class="eyebrow"><?php esc_html_e( 'Older News', 'xgi' ); ?></p>
		<h2 class="section-title section-title--sm" style="margin:0.5rem 0 2rem"><?php esc_html_e( 'From the archive', 'xgi' ); ?></h2>

		<div class="grid grid--3">
			<?php foreach ( $xgi_older as $xgi_post ) : ?>
				<?php xgi_news_card( $xgi_post, 'h2' ); ?>
			<?php endforeach; ?>
		</div>
	</div>
</section>
<?php endif; ?>

<?php
xgi_page_body();

get_footer();
