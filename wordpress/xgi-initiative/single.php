<?php
/**
 * Single post (news article).
 *
 * @package xGI
 */

get_header();

the_post();

$xgi_label = get_post_meta( get_the_ID(), 'xgi_date_label', true );

xgi_page_hero(
	array(
		'eyebrow' => $xgi_label ? $xgi_label : get_the_date(),
		'title'   => get_the_title(),
		'intro'   => has_excerpt() ? get_the_excerpt() : '',
	)
);
?>

<section class="container section section--md">
	<?php if ( has_post_thumbnail() ) : ?>
		<div style="margin-bottom:2.5rem">
			<?php the_post_thumbnail( 'xgi-wide', array( 'style' => 'border-radius:8px;width:100%' ) ); ?>
		</div>
	<?php endif; ?>

	<div class="entry-content">
		<?php
		the_content();

		wp_link_pages(
			array(
				'before' => '<div class="page-links">',
				'after'  => '</div>',
			)
		);
		?>
	</div>

	<p style="margin-top:3rem">
		<a href="<?php echo esc_url( xgi_template_url( 'page-templates/news.php' ) ); ?>" class="link-red">
			<?php esc_html_e( 'All news', 'xgi' ); ?><?php echo xgi_arrow(); // phpcs:ignore WordPress.Security.EscapeOutput ?>
		</a>
	</p>

	<?php
	if ( comments_open() || get_comments_number() ) {
		comments_template();
	}
	?>
</section>

<?php
get_footer();
