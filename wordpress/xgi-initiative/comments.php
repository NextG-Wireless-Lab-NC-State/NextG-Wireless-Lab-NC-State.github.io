<?php
/**
 * Comments template for standard posts.
 *
 * single.php calls comments_template(); without this file WordPress loads its
 * deprecated theme-compat fallback and raises a deprecation notice.
 *
 * @package xGI
 */

// Don't render anything for a directly-loaded, password-protected request.
if ( post_password_required() ) {
	return;
}
?>

<div id="comments" class="comments">

	<?php if ( have_comments() ) : ?>
		<p class="eyebrow"><?php esc_html_e( 'Discussion', 'xgi' ); ?></p>
		<h2 class="section-title section-title--sm" style="margin:0.5rem 0 2rem">
			<?php
			$xgi_count = get_comments_number();
			printf(
				/* translators: %s: comment count. */
				esc_html( _n( '%s comment', '%s comments', $xgi_count, 'xgi' ) ),
				esc_html( number_format_i18n( $xgi_count ) )
			);
			?>
		</h2>

		<ol class="comment-list">
			<?php
			wp_list_comments(
				array(
					'style'      => 'ol',
					'short_ping' => true,
					'avatar_size' => 56,
				)
			);
			?>
		</ol>

		<?php
		the_comments_pagination(
			array(
				'class'     => 'pagination',
				'prev_text' => __( 'Previous', 'xgi' ),
				'next_text' => __( 'Next', 'xgi' ),
			)
		);
		?>
	<?php endif; ?>

	<?php if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) : ?>
		<p class="comments__closed"><?php esc_html_e( 'Comments are closed.', 'xgi' ); ?></p>
	<?php endif; ?>

	<?php
	comment_form(
		array(
			'class_submit'  => 'btn btn--primary',
			'title_reply'   => __( 'Leave a comment', 'xgi' ),
			'title_reply_before' => '<h2 class="section-title section-title--sm" style="margin:0 0 1.5rem">',
			'title_reply_after'  => '</h2>',
		)
	);
	?>

</div>
