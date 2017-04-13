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

  // Carousel

  $('#owlHero').slick({
    dots: true,
    prevArrow: "",
    nextArrow: "",
    vertical: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false
  });

  $('#owlTestimonials').slick({
    dots: false,
    prevArrow: "<i class='slick-prev'>",
    nextArrow: "<i class='slick-next'>",
    vertical: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
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
