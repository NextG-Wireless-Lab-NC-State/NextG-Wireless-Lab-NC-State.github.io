<?php
/**
 * Template Name: xGI — Events
 *
 * @package xGI
 */

get_header();

$xgi_upcoming = xgi_get_events( false );
$xgi_past     = xgi_get_events( true );

xgi_page_hero(
	array(
		'eyebrow' => xgi_option( 'initiative' ),
		'title'   => get_the_title(),
		'intro'   => __( 'xGI hosts seminars, workshops, symposiums, and industry engagement events that bring together researchers, students, industry leaders, and government partners to discuss emerging wireless technologies and collaborative opportunities.', 'xgi' ),
	)
);
?>

<section class="container section section--md">
	<p class="eyebrow"><?php esc_html_e( 'Upcoming Events', 'xgi' ); ?></p>
	<h2 class="section-title section-title--sm" style="margin:0.5rem 0 2rem"><?php esc_html_e( "What's next", 'xgi' ); ?></h2>

	<?php if ( $xgi_upcoming ) : ?>
		<div class="pub-list">
			<?php foreach ( $xgi_upcoming as $xgi_event ) : ?>
				<?php xgi_event_card( $xgi_event, 'full' ); ?>
			<?php endforeach; ?>
		</div>
	<?php else : ?>
		<div class="card empty-state">
			<p class="empty-state__label"><?php esc_html_e( 'Nothing scheduled', 'xgi' ); ?></p>
			<p><?php esc_html_e( 'Upcoming event listings will appear here once available.', 'xgi' ); ?></p>
		</div>
	<?php endif; ?>
</section>

<section class="section--gray">
	<div class="container section section--md">
		<p class="eyebrow"><?php esc_html_e( 'Past Events', 'xgi' ); ?></p>
		<h2 class="section-title section-title--sm" style="margin:0.5rem 0 2rem"><?php esc_html_e( 'Archive', 'xgi' ); ?></h2>

		<?php if ( $xgi_past ) : ?>
			<div class="pub-list">
				<?php foreach ( $xgi_past as $xgi_event ) : ?>
					<?php xgi_event_card( $xgi_event, 'full' ); ?>
				<?php endforeach; ?>
			</div>
		<?php else : ?>
			<div class="card empty-state">
				<p class="empty-state__label"><?php esc_html_e( 'Placeholder', 'xgi' ); ?></p>
				<p><?php esc_html_e( 'Past event listings will appear here once available.', 'xgi' ); ?></p>
			</div>
		<?php endif; ?>
	</div>
</section>

<?php
xgi_page_body();

get_footer();
