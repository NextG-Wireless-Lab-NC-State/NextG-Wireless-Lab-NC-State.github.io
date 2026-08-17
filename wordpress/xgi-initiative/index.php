<?php
/**
 * Fallback archive / blog listing.
 *
 * @package xGI
 */

get_header();

if ( is_home() ) {
	$xgi_title   = single_post_title( '', false ) ? single_post_title( '', false ) : __( 'News and Updates', 'xgi' );
	$xgi_eyebrow = xgi_option( 'initiative' );
} elseif ( is_search() ) {
	/* translators: %s: search term. */
	$xgi_title   = sprintf( __( 'Search: %s', 'xgi' ), get_search_query() );
	$xgi_eyebrow = __( 'Search results', 'xgi' );
} else {
	$xgi_title   = get_the_archive_title();
	$xgi_eyebrow = xgi_option( 'initiative' );
}

xgi_page_hero(
	array(
		'eyebrow' => $xgi_eyebrow,
		'title'   => wp_strip_all_tags( $xgi_title ),
	)
);
?>

<section class="container section section--md">
	<?php if ( have_posts() ) : ?>
		<ul class="post-list">
			<?php
			while ( have_posts() ) :
				the_post();
				?>
				<li><?php xgi_news_card( get_post(), 'h2' ); ?></li>
			<?php endwhile; ?>
		</ul>

		<?php
		the_posts_pagination(
			array(
				'class'     => 'pagination',
				'mid_size'  => 2,
				'prev_text' => __( 'Previous', 'xgi' ),
				'next_text' => __( 'Next', 'xgi' ),
			)
		);
		?>
	<?php else : ?>
		<div class="card empty-state">
			<p class="empty-state__label"><?php esc_html_e( 'Nothing found', 'xgi' ); ?></p>
			<p><?php esc_html_e( 'Try a different search, or head back to the home page.', 'xgi' ); ?></p>
			<div style="margin-top:1.5rem"><?php get_search_form(); ?></div>
		</div>
	<?php endif; ?>
</section>

<?php
get_footer();
