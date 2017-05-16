(function($) {
 "use strict"
	
// Back to top
 	jQuery(window).scroll(function(){
	if (jQuery(this).scrollTop() > 1) {
			jQuery('.dmtop').css({bottom:"25px"});
		} else {
			jQuery('.dmtop').css({bottom:"-100px"});
		}
	});
	jQuery('.dmtop').on("click",function(){
		jQuery('html, body').animate({scrollTop: '0px'}, 800);
		return false;
	});
	
 // Page Preloader
$(window).load(function() {
	$("#intro").delay(300).fadeOut();
	$(".animationload").delay(600).fadeOut("slow");
});

// Aff
    $(".header").affix({
    offset: {
      top: 100
    , bottom: function () {
        return (this.bottom = $('.copyright-wrapper').outerHeight(true))
      }
    }
  })
// Scroll
	smoothScroll.init({
		speed: 1000,
		easing: 'easeInOutCubic',
		offset: 0,
		updateURL: false,
		callbackBefore: function ( toggle, anchor ) {},
		callbackAfter: function ( toggle, anchor ) {}
	});

// OWL Carousel
	$("#owl-post-slider, #owl-testimonial, #owl-twitter").owlCarousel({
		items : 1,
		lazyLoad : true,
		navigation : false,
		autoPlay: true
    });

// TOOLTIP
    $('#skills').tooltip({
      selector: "[data-toggle=tooltip]",
      container: "body"
    })
	
// OWL Carousel
	$("#shop_carousel").owlCarousel({
		items : 4,
		lazyLoad : true,
		navigation : false,
		autoPlay: false
    });
	
// OWL Carousel
	$("#blog_carousel").owlCarousel({
		items : 3,
		lazyLoad : true,
		navigation : false,
		autoPlay: false
    });
	
// Fun Facts
	function count($this){
		var current = parseInt($this.html(), 10);
		current = current + 1; /* Where 50 is increment */
		
		$this.html(++current);
			if(current > $this.data('count')){
				$this.html($this.data('count'));
			} else {    
				setTimeout(function(){count($this)}, 50);
			}
		}        
		
		$(".stat-count").each(function() {
		  $(this).data('count', parseInt($(this).html(), 10));
		  $(this).html('0');
		  count($(this));
	});
	
// FitDiv
	$("body").fitVids();	
	
//pretty photo
	jQuery('a[data-gal]').each(function() {
	    jQuery(this).attr('rel', jQuery(this).data('gal'));
	});  	
	jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',slideshow:false,overlay_gallery: false,theme:'light_square',social_tools:false,deeplinking:false});
	
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
  }
);
wow.init();
		
// Parallax
	$(window).on('bind','body', function() {
		parallaxInit();
	});
	function parallaxInit() {
		$('#one-parallax').parallax("30%", 0.1);
		$('#two-parallax').parallax("30%", 0.1);
		$('#three-parallax').parallax("30%", 0.1);
		$('#four-parallax').parallax("30%", 0.4);
		$('#five-parallax').parallax("30%", 0.4);
		$('#six-parallax').parallax("30%", 0.4);
		$('#seven-parallax').parallax("30%", 0.4);
		$('#eight-parallax').parallax("30%", 0.4);
	}
	
})(jQuery);

$(document).ready(function(){
    $('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(100);
    });  
});