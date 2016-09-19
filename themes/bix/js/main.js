(function($){
$(document).ready(function(){

	// on scroll behaviours

        // show on scroll up
		// var lastScrollTop = 0;

		window.onscroll = function() {
			// variables
			var $navContainer = $(".desktop-nav-wrapper .desktop-nav-container"),
				$mainNavigation = $(".mobile-nav-wrapper .main-navigation"),
				$navWrapper = $(".mobile-nav-wrapper"),
				$toolbarWrapper = $(".bottom-toolbar-wrapper");

			// desktop
		    if (window.scrollY > 60) {
		    	$navContainer.addClass("transparent-background");
		    }
		    else {
		    	$navContainer.removeClass("transparent-background");
		    };

		    // desktop homepage
		    if($(".home").length > 0) {
			    if (window.scrollY > window.innerHeight) {
			    	$navContainer.addClass("desktop-nav-fixed");
			    }
			    else {
			    	$navContainer.removeClass("desktop-nav-fixed");
			    };
			}

		    // mobile
		    if (window.scrollY > 47) {
		    	$mainNavigation.addClass("transparent-background");
		    }
		    else {
		    	$mainNavigation.removeClass("transparent-background");
		    };

		    // mobile homepage
		    if($(".home").length > 0) {
			    if (window.scrollY > window.innerHeight) {
			    	$navWrapper.removeClass("mobile-nav-wrapper-home");
			    	$mainNavigation.addClass("transparent-background");
			    }
			    else {
			    	$navWrapper.addClass("mobile-nav-wrapper-home");
			    	$mainNavigation.removeClass("transparent-background");
			    };
			}

			// single story tool bar show on scroll up
			// var st = $(this).scrollTop();
			// if (st > lastScrollTop){
			// 	$(".bottom-toolbar-wrapper").removeClass("bottom-toolbar-wrapper-slide-up");
			// } else {
				// if (st > 500) {
				// 	$(".bottom-toolbar-wrapper").addClass("bottom-toolbar-wrapper-slide-up");
				// }
			// }
			// lastScrollTop = st;

			// single story tool bar show on stop scroll
				$toolbarWrapper.removeClass("bottom-toolbar-wrapper-slide-up");
                clearTimeout( $.data( this, "scrollCheck" ) );
                $.data( this, "scrollCheck", setTimeout(function() {
                    if (window.scrollY > 500) {
						$toolbarWrapper.addClass("bottom-toolbar-wrapper-slide-up");
					}
                }, 750) );

		},false;

	// mobile nav bar menu button toggle
		var $menuContainer = $('.mobile-nav-wrapper .menu-main-menu-container'),
			$mobileMenu = $('.mobile-nav-wrapper #mobile-primary-menu');

	  	$('.menu-button').on('click', function(){
		    $mobileMenu.slideToggle(750);
		    $menuContainer.fadeToggle(750);
		    $('.fa-bars').slideToggle(750);
		    $('.fa-chevron-up').slideToggle(750);
		});

		$menuContainer.on('click', function(){
			if($('.mobile-nav-wrapper #mobile-primary-menu, .menu-item').is(event.target)) {
				// do none
			}
			else {
				$mobileMenu.slideToggle(750);
		    	$menuContainer.fadeToggle(750);
		    	$('.fa-bars').slideToggle(750);
		    	$('.fa-chevron-up').slideToggle(750);
			}
		});

	// sub menu display only on single post page
		if ($('.single-story').length > 0 || $('.page-template-teaser-stories').length > 0) {
			$('.mobile-nav-wrapper ul.sub-menu').show();
		}

	});

	//Flickity Carousel
		$('.main-carousel').flickity({
		  // options
		  cellAlign: 'left',
		  contain: true
		});



	//Smooth Scroll

	    $(function() {
	      $('a[href*="#"]:not([href="#"])').click(function() {
	        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	          var target = $(this.hash);
	          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	          if (target.length) {
	            $('html, body').animate({
	              scrollTop: target.offset().top
	            }, 800);
	            return false;
	          }
	        }
	      });
	    });

	// Highlight Modal Button
	$('.comment-modal-button').on('click', function(){
	    $('.single-story-modal-overlay').fadeIn('slow');
	    $('.desktop-nav-container').fadeOut('slow');
	    $('.comment-modal').fadeIn('slow');
	});
	$('.highlight-modal-button').on('click', function(){
	    $('.single-story-modal-overlay').fadeIn('slow');
	    $('.desktop-nav-container').fadeOut('slow');
	    $('.highlight-modal').fadeIn('slow');
	});
	$('.download-modal-button').on('click', function(){
	    $('.single-story-modal-overlay').fadeIn('slow');
	    $('.desktop-nav-container').fadeOut('slow');
	    $('.download-modal').fadeIn('slow');
	});

	$('.single-story-modal-container, .comment-section-link').on('click', function(){
		if(!$('.single-story-modal-container, .comment-section-link').is(event.target)) {
			// do nothing
		}
		else {
			$('.single-story-modal-overlay').fadeOut('slow');
			$('.desktop-nav-container').fadeIn('slow');
			$('.comment-modal, .highlight-modal, .download-modal').fadeOut('slow');
		}
	});


}(jQuery));
