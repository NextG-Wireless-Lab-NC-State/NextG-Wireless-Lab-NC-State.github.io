<?php
/**
 * Site header: utility bar, red identity band, primary navigation.
 *
 * @package xGI
 */

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php if ( xgi_option( 'google_fonts', true ) ) : ?>
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<?php endif; ?>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<a class="skip-link" href="#content"><?php esc_html_e( 'Skip to content', 'xgi' ); ?></a>

<header class="site-header" id="site-header">

	<div class="utility-bar">
		<div class="container utility-bar__inner">
			<span class="utility-bar__brand">
				<?php echo esc_html( xgi_option( 'university' ) ); ?>
				<span class="utility-bar__sep">|</span>
				<?php echo esc_html( xgi_option( 'initiative' ) ); ?>
			</span>
			<div class="utility-bar__links">
				<a href="<?php echo esc_url( xgi_contact_mailto() ); ?>"><?php echo esc_html( xgi_contact_email() ); ?></a>
				<span class="utility-bar__sep utility-bar__sep--sm">|</span>
				<span class="utility-bar__dept"><?php echo esc_html( xgi_option( 'department' ) ); ?></span>
			</div>
		</div>
	</div>

	<div class="identity-band">
		<div class="container identity-band__inner">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="brand-link" rel="home">
				<?php echo xgi_brand_lockup(); // phpcs:ignore WordPress.Security.EscapeOutput ?>
			</a>

			<div class="identity-band__actions">
				<a href="<?php echo esc_url( xgi_template_url( 'page-templates/affiliates.php' ) ); ?>" class="btn btn--ghost-light btn--sm">
					<?php esc_html_e( 'Become an Affiliate', 'xgi' ); ?>
				</a>
				<a href="<?php echo esc_url( xgi_contact_mailto() ); ?>" class="btn btn--white btn--sm">
					<?php esc_html_e( 'Contact Us', 'xgi' ); ?>
				</a>
			</div>

			<button type="button" class="nav-toggle" id="xgi-nav-toggle" aria-label="<?php esc_attr_e( 'Toggle navigation menu', 'xgi' ); ?>" aria-expanded="false" aria-controls="xgi-mobile-nav">
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
					<path class="nav-toggle__open" d="M3 6h18M3 12h18M3 18h18" stroke-linecap="round"/>
					<path class="nav-toggle__close" d="M6 6l12 12M18 6L6 18" stroke-linecap="round" style="display:none"/>
				</svg>
			</button>
		</div>
	</div>

	<nav class="primary-nav" aria-label="<?php esc_attr_e( 'Primary', 'xgi' ); ?>">
		<div class="container">
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'primary',
					'container'      => false,
					'depth'          => 1,
					'fallback_cb'    => 'xgi_nav_fallback',
				)
			);
			?>
		</div>
	</nav>

	<nav class="mobile-nav" id="xgi-mobile-nav" aria-label="<?php esc_attr_e( 'Mobile', 'xgi' ); ?>">
		<div class="container">
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'primary',
					'container'      => false,
					'depth'          => 1,
					'fallback_cb'    => 'xgi_nav_fallback',
				)
			);
			?>
			<div class="mobile-nav__actions">
				<a href="<?php echo esc_url( xgi_template_url( 'page-templates/affiliates.php' ) ); ?>" class="btn btn--primary btn--sm">
					<?php esc_html_e( 'Become an Affiliate', 'xgi' ); ?>
				</a>
				<a href="<?php echo esc_url( xgi_contact_mailto() ); ?>" class="btn btn--outline btn--sm">
					<?php esc_html_e( 'Contact Us', 'xgi' ); ?>
				</a>
			</div>
		</div>
	</nav>

</header>

<main class="xgi-main" id="content">
