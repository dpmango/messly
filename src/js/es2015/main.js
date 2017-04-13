$(document).ready(function(){

  const _window = $(window);

 	// Prevent # behavior
	$('[href="#"]').click( function(e) {
		e.preventDefault();
	});

	// Smoth scroll
	$('a[href^="#section"]').click( function() {
        var el = $(this).attr('href');
        $('body, html').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false;
	});

  // owl
  // $('#owlHero').owlCarousel({
  //   loop: true,
  //   items: 1,
  //   autoplay: true,
  //   autoplayTimeout: 7000,
  //   responsiveRefreshRate: 50,
  //   nav: false,
  //   dots: true,
  //   margin: 0,
  //   animateIn: 'fadeInUp',
  //   animateOut: 'fadeOutUp'
  // });

  $('#owlHero').slick({
    dots: true,
    prevArrow: "",
    nextArrow: "",
    vertical: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('#owlTestimonials').owlCarousel({
    loop: false,
    items: 1,
    responsiveRefreshRate: 50,
    nav: true,
    dots: false,
    margin: 0
  });

  // $('#owlHero').owlCarousel({
  //   loop: true,
  //   nav: true,
  //   margin: 0,
  //   responsive: {
  //     0:{
  //       items: 1,
  //     },
  //     600:{
  //       items: 1,
  //     },
  //     1000:{
  //       items: 1,
  //     }
  //   }
  // });

});
