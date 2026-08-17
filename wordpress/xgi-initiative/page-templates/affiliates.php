<?php
/**
 * Template Name: xGI — Industry Affiliates
 *
 * @package xGI
 */

get_header();

$xgi_about = array(
	__( 'xGI at NC State University collaborates with industry, government, and research organizations to advance cutting-edge wireless technologies. Our interdisciplinary faculty work across wireless hardware, communication systems, networking, artificial intelligence, security, and emerging wireless-enabled applications.', 'xgi' ),
	__( 'Through the xGI Affiliate Program, partners engage directly with leading researchers and gain early access to emerging technologies in 5G, 6G, wireless sensing, and connected systems.', 'xgi' ),
	__( 'xGI combines fundamental research, system design, and large-scale experimental platforms to accelerate innovation and enable real-world validation of next-generation wireless technologies.', 'xgi' ),
);

$xgi_benefits = array(
	array( __( 'Early Access to Research', 'xgi' ), __( 'Engage with faculty developing the next generation of wireless technologies.', 'xgi' ) ),
	array( __( 'Collaborative Research', 'xgi' ), __( 'Participate in joint projects and large federal research initiatives.', 'xgi' ) ),
	array( __( 'Experimental Platforms', 'xgi' ), __( 'Access advanced wireless testbeds and large-scale experimentation environments.', 'xgi' ) ),
	array( __( 'Talent Pipeline', 'xgi' ), __( 'Recruit highly skilled graduate students and postdoctoral researchers.', 'xgi' ) ),
);

$xgi_actions = sprintf(
	'<a href="#join" class="btn btn--primary">%1$s%2$s</a><a href="%3$s" class="btn btn--ghost-light">%4$s</a>',
	esc_html__( 'Become an Affiliate', 'xgi' ),
	xgi_arrow(),
	esc_url( xgi_contact_mailto() ),
	esc_html__( 'Contact xGI', 'xgi' )
);

xgi_page_hero(
	array(
		'eyebrow' => __( 'Industry Affiliates', 'xgi' ),
		'title'   => __( 'Partner with xGI', 'xgi' ),
		'intro'   => __( 'Partner with the xGI community to advance next-generation wireless technologies and accelerate the transition of research innovations into real-world systems.', 'xgi' ),
		'actions' => $xgi_actions,
	)
);
?>

<section class="container section section--md">
	<p class="eyebrow"><?php esc_html_e( 'About the Affiliate Program', 'xgi' ); ?></p>
	<h2 class="section-title section-title--sm" style="margin:0.5rem 0 1.5rem"><?php esc_html_e( 'Collaboration that moves research to reality', 'xgi' ); ?></h2>

	<div class="grid grid--3-md" style="max-width:64rem">
		<?php foreach ( $xgi_about as $xgi_paragraph ) : ?>
			<p class="lede" style="font-size:1rem"><?php echo esc_html( $xgi_paragraph ); ?></p>
		<?php endforeach; ?>
	</div>
</section>

<section class="section--gray">
	<div class="container section section--md">
		<p class="eyebrow"><?php esc_html_e( 'Why Partner with xGI', 'xgi' ); ?></p>
		<h2 class="section-title section-title--sm" style="margin:0.5rem 0 2rem"><?php esc_html_e( 'The value of membership', 'xgi' ); ?></h2>

		<div class="grid grid--4">
			<?php foreach ( $xgi_benefits as $xgi_i => $xgi_benefit ) : ?>
				<div class="card card__body card__body--lg">
					<span class="benefit-card__number"><?php echo esc_html( str_pad( (string) ( $xgi_i + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
					<h3 class="benefit-card__title"><?php echo esc_html( $xgi_benefit[0] ); ?></h3>
					<p class="benefit-card__desc"><?php echo esc_html( $xgi_benefit[1] ); ?></p>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="section--red" id="join" style="scroll-margin-top:6rem">
	<div class="container section section--md">
		<h2 class="section-title" style="max-width:48rem"><?php esc_html_e( 'Organizations interested in collaborating with xGI are encouraged to contact us.', 'xgi' ); ?></h2>

		<p style="margin-top:1.25rem;font-size:1.125rem">
			<?php esc_html_e( 'Email:', 'xgi' ); ?>
			<a href="<?php echo esc_url( xgi_contact_mailto() ); ?>" style="text-decoration:underline;font-weight:600"><?php echo esc_html( xgi_contact_email() ); ?></a>
		</p>

		<div class="btn-row" style="margin-top:2rem">
			<a href="<?php echo esc_url( xgi_contact_mailto() ); ?>" class="btn btn--white"><?php esc_html_e( 'Contact Us', 'xgi' ); ?></a>
			<a href="<?php echo esc_url( xgi_contact_mailto() ); ?>" class="btn btn--ghost-light"><?php esc_html_e( 'Become an Affiliate', 'xgi' ); ?></a>
		</div>
	</div>
</section>

<?php
xgi_page_body();

get_footer();
