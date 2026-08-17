<?php
/**
 * Default page template.
 *
 * @package xGI
 */

get_header();

the_post();

xgi_page_hero(
	array(
		'eyebrow' => xgi_option( 'initiative' ),
		'title'   => get_the_title(),
		'intro'   => has_excerpt() ? get_the_excerpt() : '',
	)
);
?>

<section class="container section section--md">
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
</section>

<?php
get_footer();
