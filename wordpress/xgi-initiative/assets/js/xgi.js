/**
 * xGI Initiative — front-end behaviour.
 *
 * Four small enhancements, all progressive: the site works without any of them.
 *   1. Sticky-header shadow on scroll
 *   2. Mobile navigation toggle
 *   3. Hero image crossfade
 *   4. Scroll reveals
 *   5. Publications filtering
 */
( function () {
	'use strict';

	var reduceMotion = window.matchMedia
		? window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches
		: false;

	/* ---------------------------------------------------------------------
	 * 1. Header shadow
	 * ------------------------------------------------------------------ */
	function initHeader() {
		var header = document.getElementById( 'site-header' );
		if ( ! header ) {
			return;
		}

		function onScroll() {
			header.classList.toggle( 'is-scrolled', window.scrollY > 8 );
		}

		onScroll();
		window.addEventListener( 'scroll', onScroll, { passive: true } );
	}

	/* ---------------------------------------------------------------------
	 * 2. Mobile navigation
	 * ------------------------------------------------------------------ */
	function initNav() {
		var toggle = document.getElementById( 'xgi-nav-toggle' );
		var nav = document.getElementById( 'xgi-mobile-nav' );

		if ( ! toggle || ! nav ) {
			return;
		}

		var openIcon = toggle.querySelector( '.nav-toggle__open' );
		var closeIcon = toggle.querySelector( '.nav-toggle__close' );

		toggle.addEventListener( 'click', function () {
			var isOpen = nav.classList.toggle( 'is-open' );
			toggle.setAttribute( 'aria-expanded', isOpen ? 'true' : 'false' );

			if ( openIcon && closeIcon ) {
				openIcon.style.display = isOpen ? 'none' : '';
				closeIcon.style.display = isOpen ? '' : 'none';
			}
		} );

		nav.addEventListener( 'click', function ( event ) {
			if ( event.target.closest( 'a' ) ) {
				nav.classList.remove( 'is-open' );
				toggle.setAttribute( 'aria-expanded', 'false' );
				if ( openIcon && closeIcon ) {
					openIcon.style.display = '';
					closeIcon.style.display = 'none';
				}
			}
		} );
	}

	/* ---------------------------------------------------------------------
	 * 3. Hero carousel
	 * ------------------------------------------------------------------ */
	function initCarousel( root ) {
		var slides = Array.prototype.slice.call( root.querySelectorAll( '.carousel__slide' ) );
		var dots = Array.prototype.slice.call( root.querySelectorAll( '.carousel__dot' ) );
		var interval = parseInt( root.getAttribute( 'data-interval' ), 10 ) || 4000;
		var active = 0;
		var timer = null;

		if ( slides.length < 2 ) {
			return;
		}

		function show( index ) {
			active = ( index + slides.length ) % slides.length;

			slides.forEach( function ( slide, i ) {
				slide.classList.toggle( 'is-active', i === active );
				if ( i === active ) {
					slide.removeAttribute( 'aria-hidden' );
				} else {
					slide.setAttribute( 'aria-hidden', 'true' );
				}
			} );

			dots.forEach( function ( dot, i ) {
				dot.classList.toggle( 'is-active', i === active );
			} );
		}

		function start() {
			if ( reduceMotion ) {
				return;
			}
			stop();
			timer = window.setInterval( function () {
				show( active + 1 );
			}, interval );
		}

		function stop() {
			if ( timer ) {
				window.clearInterval( timer );
				timer = null;
			}
		}

		dots.forEach( function ( dot, i ) {
			dot.addEventListener( 'click', function () {
				show( i );
				start();
			} );
		} );

		root.addEventListener( 'mouseenter', stop );
		root.addEventListener( 'mouseleave', start );
		document.addEventListener( 'visibilitychange', function () {
			if ( document.hidden ) {
				stop();
			} else {
				start();
			}
		} );

		show( 0 );
		start();
	}

	/* ---------------------------------------------------------------------
	 * 4. Scroll reveals
	 * ------------------------------------------------------------------ */
	function initReveals() {
		var targets = document.querySelectorAll( '.reveal' );

		if ( ! targets.length ) {
			return;
		}

		if ( reduceMotion || ! ( 'IntersectionObserver' in window ) ) {
			Array.prototype.forEach.call( targets, function ( el ) {
				el.classList.add( 'is-visible' );
			} );
			return;
		}

		var observer = new IntersectionObserver(
			function ( entries ) {
				entries.forEach( function ( entry ) {
					if ( entry.isIntersecting ) {
						entry.target.classList.add( 'is-visible' );
						observer.unobserve( entry.target );
					}
				} );
			},
			{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
		);

		Array.prototype.forEach.call( targets, function ( el ) {
			observer.observe( el );
		} );
	}

	/* ---------------------------------------------------------------------
	 * 5. Publications explorer
	 * ------------------------------------------------------------------ */
	function initPublications( root ) {
		var pills = Array.prototype.slice.call( root.querySelectorAll( '.pill' ) );
		var items = Array.prototype.slice.call( root.querySelectorAll( '.pub-item' ) );
		var awards = root.querySelector( '[data-xgi-awards]' );
		var status = root.querySelector( '[data-xgi-count]' );
		var reset = root.querySelector( '[data-xgi-reset]' );
		var empty = root.querySelector( '[data-xgi-empty]' );

		var strings = window.xgiL10n || {};
		var area = 'all';

		function apply() {
			var awardsOnly = awards ? awards.checked : false;
			var visible = 0;

			items.forEach( function ( item ) {
				var matchesArea = 'all' === area || item.getAttribute( 'data-area' ) === area;
				var matchesAward = ! awardsOnly || '1' === item.getAttribute( 'data-award' );
				var show = matchesArea && matchesAward;

				item.hidden = ! show;
				if ( show ) {
					visible++;
				}
			} );

			if ( status ) {
				var noun = 1 === visible
					? ( strings.publicationSingular || 'publication' )
					: ( strings.publicationPlural || 'publications' );
				var label = ( strings.showing || 'Showing' ) + ' <b>' + visible + '</b> ' + noun;
				var activePill = pills.filter( function ( pill ) {
					return pill.classList.contains( 'is-active' );
				} )[ 0 ];

				if ( 'all' !== area && activePill && activePill.getAttribute( 'data-title' ) ) {
					label += ' ' + ( strings.inArea || 'in' ) + ' ' + activePill.getAttribute( 'data-title' );
				}

				status.innerHTML = label + '.';
			}

			if ( empty ) {
				empty.hidden = visible > 0;
			}

			if ( reset ) {
				reset.hidden = 'all' === area && ! awardsOnly;
			}
		}

		pills.forEach( function ( pill ) {
			pill.addEventListener( 'click', function () {
				area = pill.getAttribute( 'data-area' );

				pills.forEach( function ( other ) {
					var isActive = other === pill;
					other.classList.toggle( 'is-active', isActive );
					other.setAttribute( 'aria-pressed', isActive ? 'true' : 'false' );
				} );

				apply();
			} );
		} );

		if ( awards ) {
			awards.addEventListener( 'change', apply );
		}

		if ( reset ) {
			reset.addEventListener( 'click', function () {
				area = 'all';
				if ( awards ) {
					awards.checked = false;
				}
				pills.forEach( function ( pill, i ) {
					pill.classList.toggle( 'is-active', 0 === i );
					pill.setAttribute( 'aria-pressed', 0 === i ? 'true' : 'false' );
				} );
				apply();
			} );
		}

		apply();
	}

	/* ------------------------------------------------------------------ */

	function init() {
		initHeader();
		initNav();
		initReveals();

		Array.prototype.forEach.call(
			document.querySelectorAll( '[data-xgi-carousel]' ),
			initCarousel
		);

		Array.prototype.forEach.call(
			document.querySelectorAll( '[data-xgi-publications]' ),
			initPublications
		);
	}

	if ( 'loading' === document.readyState ) {
		document.addEventListener( 'DOMContentLoaded', init );
	} else {
		init();
	}
} )();
