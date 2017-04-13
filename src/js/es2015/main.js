// set dalay on resize event to prevent huge memory consumption
(function($) {
  var uniqueCntr = 0;
  $.fn.resized = function (waitTime, fn) {
    if (typeof waitTime === "function") {
        fn = waitTime;
        waitTime = 50;
    }
    var tag = "scrollTimer" + uniqueCntr++;
    this.resize(function () {
        var self = $(this);
        var timer = self.data(tag);
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            self.removeData(tag);
            fn.call(self[0]);
        }, waitTime);
        self.data(tag, timer);
    });
  }
})(jQuery);


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
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 568,
        settings: {
          autoplay: false,
          dots: false,
          draggable: false,
          swipe: false,
          touchMove: false
        }
      }
    ]
  });

  _window.resized(100, function(){
    if ( _window.width() <= 568 ){
      $('#owlHero').slick('slickGoTo', 1);
    }
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
