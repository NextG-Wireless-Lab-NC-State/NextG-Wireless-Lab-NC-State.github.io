<?php
/**
 * Site footer.
 *
 * @package xGI
 */

?>
</main>

<footer class="site-footer">
	<div class="site-footer__top">
		<div class="container site-footer__grid">

			<div class="site-footer__brand">
				<?php echo xgi_brand_lockup(); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				<p class="site-footer__address">
					<?php echo esc_html( xgi_option( 'university' ) ); ?> | <?php echo esc_html( xgi_option( 'initiative' ) ); ?>
					<br>
					<?php echo esc_html( xgi_option( 'department_footer' ) ); ?>
					<?php if ( xgi_option( 'address' ) ) : ?>
						<br>
						<?php echo esc_html( xgi_option( 'address' ) ); ?>
					<?php endif; ?>
				</p>
			</div>

			<div>
				<h2 class="eyebrow eyebrow--muted"><?php esc_html_e( 'Explore', 'xgi' ); ?></h2>
				<?php
				if ( has_nav_menu( 'footer' ) ) {
					wp_nav_menu(
						array(
							'theme_location' => 'footer',
							'container'      => false,
							'menu_class'     => 'site-footer__links',
							'depth'          => 1,
						)
					);
				}
				?>
			</div>

			<div>
				<h2 class="eyebrow eyebrow--muted"><?php esc_html_e( 'Connect', 'xgi' ); ?></h2>
				<p class="site-footer__contact">
					<?php esc_html_e( 'Email:', 'xgi' ); ?>
					<a href="<?php echo esc_url( xgi_contact_mailto() ); ?>"><?php echo esc_html( xgi_contact_email() ); ?></a>
				</p>
				<div class="site-footer__actions btn-row">
					<a href="<?php echo esc_url( xgi_contact_mailto() ); ?>" class="btn btn--primary btn--sm"><?php esc_html_e( 'Contact Us', 'xgi' ); ?></a>
					<a href="<?php echo esc_url( xgi_template_url( 'page-templates/affiliates.php' ) ); ?>" class="btn btn--ghost-light btn--sm"><?php esc_html_e( 'Become an Affiliate', 'xgi' ); ?></a>
				</div>
			</div>

		</div>
	</div>

	<div class="site-footer__bottom">
		<div class="container site-footer__bottom-inner">
			<span>
				<?php
				printf(
					/* translators: 1: year, 2: university, 3: initiative. */
					esc_html__( '© %1$s %2$s · %3$s', 'xgi' ),
					esc_html( gmdate( 'Y' ) ),
					esc_html( xgi_option( 'university' ) ),
					esc_html( xgi_option( 'initiative' ) )
				);
				?>
			</span>
			<span><?php echo esc_html( xgi_option( 'department_footer' ) ); ?></span>
		</div>
	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
