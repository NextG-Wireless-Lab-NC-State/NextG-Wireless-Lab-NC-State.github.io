<?php
/**
 * Front page.
 *
 * @package xGI
 */

get_header();

$xgi_areas       = xgi_get_areas();
$xgi_events      = xgi_get_events( false );
$xgi_slides      = xgi_hero_slides();
$xgi_research_url = xgi_template_url( 'page-templates/research.php' );
$xgi_people_url  = xgi_template_url( 'page-templates/people.php' );
$xgi_events_url  = xgi_template_url( 'page-templates/events.php' );
$xgi_affil_url   = xgi_template_url( 'page-templates/affiliates.php' );
?>

<!-- 1. Hero -->
<section class="hero-glow grain">
	<div class="container home-hero__inner">

		<div class="home-hero__copy">
			<p class="eyebrow anim-rise" style="animation-delay:0.05s"><?php echo esc_html( xgi_option( 'hero_eyebrow' ) ); ?></p>

			<h1 class="home-hero__title anim-rise" style="animation-delay:0.15s">
				<?php echo esc_html( xgi_option( 'hero_title_start' ) ); ?>
				<span class="text-glow-red"><?php echo esc_html( xgi_option( 'hero_title_glow' ) ); ?></span>
				<?php echo esc_html( xgi_option( 'hero_title_end' ) ); ?>
			</h1>

			<p class="home-hero__lede anim-rise" style="animation-delay:0.28s"><?php echo esc_html( xgi_option( 'hero_lede' ) ); ?></p>

			<div class="home-hero__actions btn-row anim-rise" style="animation-delay:0.4s">
				<a href="<?php echo esc_url( $xgi_research_url ); ?>" class="btn btn--primary">
					<?php esc_html_e( 'Explore Research', 'xgi' ); ?><?php echo xgi_arrow(); // phpcs:ignore WordPress.Security.EscapeOutput ?>
				</a>
				<a href="<?php echo esc_url( $xgi_people_url ); ?>" class="btn btn--ghost-light"><?php esc_html_e( 'Meet the Faculty', 'xgi' ); ?></a>
			</div>
		</div>

		<div class="home-hero__visual anim-rise" style="animation-delay:0.5s">
			<div class="home-hero__frame">
				<div class="home-hero__media">
					<?php if ( $xgi_slides ) : ?>
						<div class="carousel" data-xgi-carousel data-interval="4000">
							<?php foreach ( $xgi_slides as $i => $slide ) : ?>
								<img
									class="carousel__slide<?php echo 0 === $i ? ' is-active' : ''; ?>"
									src="<?php echo esc_url( $slide['url'] ); ?>"
									alt="<?php echo esc_attr( $slide['alt'] ); ?>"
									<?php echo 0 === $i ? '' : 'aria-hidden="true"'; ?>
									loading="<?php echo 0 === $i ? 'eager' : 'lazy'; ?>">
							<?php endforeach; ?>

							<?php if ( count( $xgi_slides ) > 1 ) : ?>
								<div class="carousel__dots">
									<?php foreach ( $xgi_slides as $i => $slide ) : ?>
										<button type="button" class="carousel__dot<?php echo 0 === $i ? ' is-active' : ''; ?>" data-slide="<?php echo esc_attr( $i ); ?>"
											aria-label="<?php printf( esc_attr__( 'Show slide %d', 'xgi' ), (int) $i + 1 ); ?>"></button>
									<?php endforeach; ?>
								</div>
							<?php endif; ?>
						</div>
					<?php endif; ?>
				</div>

				<div class="home-hero__stat">
					<b><?php echo esc_html( xgi_option( 'hero_stat_number' ) ); ?></b>
					<span><?php echo esc_html( xgi_option( 'hero_stat_label' ) ); ?></span>
				</div>
			</div>
		</div>

	</div>
</section>

<!-- 2. Mission -->
<section class="container section">
	<div class="mission reveal">
		<div>
			<h2 class="eyebrow eyebrow--lg"><?php esc_html_e( 'Our Mission', 'xgi' ); ?></h2>
		</div>
		<p class="mission__text"><?php echo esc_html( xgi_option( 'mission' ) ); ?></p>
	</div>
</section>

<!-- 3. Vision -->
<section class="vision grain">
	<span class="vision__mark" aria-hidden="true">&ldquo;</span>
	<div class="container vision__inner">
		<div class="reveal">
			<p class="eyebrow eyebrow--light"><?php esc_html_e( 'Our Vision', 'xgi' ); ?></p>
			<p class="vision__text"><?php echo esc_html( xgi_option( 'vision' ) ); ?></p>
		</div>
	</div>
</section>

<!-- 4. Research gateway -->
<section class="container section">
	<div class="section-head reveal">
		<div>
			<p class="eyebrow"><?php esc_html_e( 'Research', 'xgi' ); ?></p>
			<h2 class="section-title" style="margin-top:0.75rem"><?php esc_html_e( 'Five areas. One wireless fabric.', 'xgi' ); ?></h2>
		</div>
		<a href="<?php echo esc_url( $xgi_research_url ); ?>" class="link-red">
			<?php esc_html_e( 'Explore all research', 'xgi' ); ?><?php echo xgi_arrow(); // phpcs:ignore WordPress.Security.EscapeOutput ?>
		</a>
	</div>

	<div class="grid grid--3">
		<?php foreach ( $xgi_areas as $i => $xgi_area ) : ?>
			<?php $xgi_keywords = array_slice( (array) get_post_meta( $xgi_area->ID, 'xgi_keywords', true ), 0, 6 ); ?>
			<div class="reveal" style="transition-delay:<?php echo (int) ( $i * 70 ); ?>ms">
				<a href="<?php echo esc_url( get_permalink( $xgi_area ) ); ?>" class="card area-card">
					<span class="area-card__number"><?php echo esc_html( xgi_area_number( $xgi_area ) ); ?></span>
					<h3 class="area-card__title"><?php echo esc_html( $xgi_area->post_title ); ?></h3>
					<p class="area-card__keywords"><?php echo esc_html( implode( ' · ', $xgi_keywords ) ); ?></p>
					<span class="link-red area-card__link">
						<?php esc_html_e( 'Read more', 'xgi' ); ?><?php echo xgi_arrow(); // phpcs:ignore WordPress.Security.EscapeOutput ?>
					</span>
				</a>
			</div>
		<?php endforeach; ?>
	</div>
</section>

<?php
// 5. News — hidden by default, matching the original site.
if ( xgi_option( 'show_news' ) ) :
	$xgi_news = get_posts( array( 'posts_per_page' => 4 ) );
	if ( $xgi_news ) :
		?>
<section class="section--olive">
	<div class="container section section--md">
		<div class="section-head reveal">
			<div>
				<p class="eyebrow eyebrow--light"><?php esc_html_e( 'Latest', 'xgi' ); ?></p>
				<h2 class="section-title" style="margin-top:0.75rem"><?php esc_html_e( 'News', 'xgi' ); ?></h2>
			</div>
			<a href="<?php echo esc_url( xgi_template_url( 'page-templates/news.php' ) ); ?>" class="link-white">
				<?php esc_html_e( 'All news', 'xgi' ); ?><?php echo xgi_arrow(); // phpcs:ignore WordPress.Security.EscapeOutput ?>
			</a>
		</div>

		<div class="grid grid--4">
			<?php foreach ( $xgi_news as $i => $xgi_post ) : ?>
				<div class="reveal" style="transition-delay:<?php echo (int) ( $i * 70 ); ?>ms">
					<?php xgi_news_card( $xgi_post ); ?>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
		<?php
	endif;
endif;
?>

<!-- 6. Upcoming events -->
<?php if ( $xgi_events ) : ?>
<section class="section--navy">
	<div class="container section section--md">
		<div class="section-head reveal">
			<div>
				<p class="eyebrow eyebrow--light"><?php esc_html_e( 'Mark your calendar', 'xgi' ); ?></p>
				<h2 class="section-title" style="margin-top:0.75rem"><?php esc_html_e( 'Upcoming Events', 'xgi' ); ?></h2>
			</div>
			<a href="<?php echo esc_url( $xgi_events_url ); ?>" class="link-white">
				<?php esc_html_e( 'All events', 'xgi' ); ?><?php echo xgi_arrow(); // phpcs:ignore WordPress.Security.EscapeOutput ?>
			</a>
		</div>

		<div class="grid grid--2-md">
			<?php foreach ( $xgi_events as $i => $xgi_event ) : ?>
				<div class="reveal" style="transition-delay:<?php echo (int) ( $i * 80 ); ?>ms">
					<?php xgi_event_card( $xgi_event, 'compact' ); ?>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
<?php endif; ?>

<!-- 7. Calls to action -->
<section class="section--dark grain">
	<div class="container section section--md" style="position:relative;z-index:1">
		<div class="grid grid--4 reveal">
			<a href="<?php echo esc_url( $xgi_research_url ); ?>" class="cta-card">
				<h3 class="cta-card__title"><?php esc_html_e( 'Explore Research', 'xgi' ); ?><?php echo xgi_arrow(); // phpcs:ignore WordPress.Security.EscapeOutput ?></h3>
				<p class="cta-card__desc"><?php esc_html_e( 'Five research areas across the wireless stack.', 'xgi' ); ?></p>
			</a>
			<a href="<?php echo esc_url( $xgi_people_url ); ?>" class="cta-card">
				<h3 class="cta-card__title"><?php esc_html_e( 'Meet the Faculty', 'xgi' ); ?><?php echo xgi_arrow(); // phpcs:ignore WordPress.Security.EscapeOutput ?></h3>
				<p class="cta-card__desc"><?php esc_html_e( 'Researchers across NC State.', 'xgi' ); ?></p>
			</a>
			<a href="<?php echo esc_url( $xgi_affil_url ); ?>" class="cta-card cta-card--primary">
				<h3 class="cta-card__title"><?php esc_html_e( 'Become an Affiliate', 'xgi' ); ?><?php echo xgi_arrow(); // phpcs:ignore WordPress.Security.EscapeOutput ?></h3>
				<p class="cta-card__desc"><?php esc_html_e( 'Partner with xGI on FutureG.', 'xgi' ); ?></p>
			</a>
			<a href="<?php echo esc_url( xgi_contact_mailto() ); ?>" class="cta-card">
				<h3 class="cta-card__title"><?php esc_html_e( 'Contact xGI', 'xgi' ); ?><?php echo xgi_arrow(); // phpcs:ignore WordPress.Security.EscapeOutput ?></h3>
				<p class="cta-card__desc"><?php echo esc_html( xgi_contact_email() ); ?></p>
			</a>
		</div>
	</div>
</section>

<?php
get_footer();
