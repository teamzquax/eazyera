
/* ----------------------------------------------------------------

[ Custom settings ]

01. ScrollIt
02. Navbar scrolling background
03. Close navbar-collapse when a  clicked
04. Sections background image from data background 
05. Isotope active
06. Animations
07. YouTubePopUp
08. Testimonials owlCarousel
09. Projects owlCarousel
10. Blog owlCarousel
12. Clients owlCarousel
13. Services owlCarousel
15. MagnificPopup (Image, Youtube, Vimeo and custom popup)
16. Scroll back to top
17. Slider
18. Accordion Box
19. Preloader
20. Contact Form

------------------------------------------------------------------- */

$(function() {
    
    "use strict";
    
    var wind = $(window);
    
    // ScrollIt
    $.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -70            // offste (in px) for fixed top navigation
    });
    
    // Preloader
	$("#preloader").fadeOut(900);
	$(".preloader-bg").delay(800).fadeOut(900);
	var wind = $(window);  
    
    // Navbar scrolling background
    wind.on("scroll",function () {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");
        if(bodyScroll > 100){
            navbar.addClass("nav-scroll");
            logo.attr('src', 'assets/img/logo.png');
        }else{
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'assets/img/logo.png');
        }
    });
    
    // Close navbar-collapse when a  clicked
    $(".navbar-nav .dropdown-item a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    // Sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function(indx){
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    
    // Isotope Active Masonry Gallery
	$('.gallery-items, .portfolio2').imagesLoaded(function () {
		// Add isotope on click filter function
		$('.gallery-filter li').on('click', function () {
			$(".gallery-filter li").removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr('data-filter');
			$(".gallery-items, .portfolio2").isotope({
				filter: selector
				, animationOptions: {
					duration: 750
					, easing: 'linear'
					, queue: false
				, }
			});
			return false;
		});
		// $(".gallery-items, .portfolio2").isotope({
		// 	itemSelector: '.single-item'
		// 	, layoutMode: 'masonry'
		// , });
	});

    // Animations
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function () {
                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            }
                            else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            }
                            else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            }
                            else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    $(function () {
        contentWayPoint();
    });
    
    // YouTubePopUp
    $("a.vid").YouTubePopUp();
    
    // Testimonials owlCarousel
    $('.blog .owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:true,
        autoplay: false,
        dots: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    
    // Testimonials owlCarousel
    $('.testimonials .owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:true,
        autoplay: true,
        dots: false,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    
    // Clients owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        loop: true
        , margin: 10
        , mouseDrag: true
        , autoplay: false
        , dots: false
        , responsiveClass: true
        , responsive: {
            0: {
                margin: 10
                , items: 2
            }
            , 600: {
                items: 3
            }
            , 1000: {
                items: 4
            }
        }
    });
    
    // MagnificPopup
    $(".img-zoom").magnificPopup({
        type: "image"
        , closeOnContentClick: !0
        , mainClass: "mfp-fade"
        , gallery: {
            enabled: !0
            , navigateByImgClick: !0
            , preload: [0, 1]
        }
    })
    $('.magnific-youtube, .magnific-vimeo, .magnific-custom').magnificPopup({
        disableOn: 700
        , type: 'iframe'
        , mainClass: 'mfp-fade'
        , removalDelay: 300
        , preloader: false
        , fixedContentPos: false
    });
    
    //  Scroll back to top
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath?.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
    
});

// Slider 
$(document).ready(function() {
    var owl = $('.header .owl-carousel');
    // Slider owlCarousel
    $('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        dots: false,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>']
    });
    // Slider owlCarousel
    $('.slider-fade .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        dots: false,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        nav: true,
        navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>']
    });
    owl.on('changed.owl.carousel', function(event) {
        var item = event.item.index - 2;     // Position of the current item
        $('h4').removeClass('animated fadeInUp');
        $('h1').removeClass('animated fadeInUp');
        $('p').removeClass('animated fadeInUp');
        $('.button-primary').removeClass('animated fadeInUp');
        $('.button-tersiyer').removeClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.button-primary').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.button-tersiyer').addClass('animated fadeInUp');
    });
});

// Accordion
	$(".accordion").on("click", ".title", function () {
		$(this).next().slideDown();
		$(".accordion-info").not($(this).next()).slideUp();
	});
	$(".accordion").on("click", ".item", function () {
		$(this).addClass("active").siblings().removeClass("active");
	});


// Contact Form
    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;
    // success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val('');
    }
    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });


    // Add Cart

$(document).ready(function() {
    
    $('#btn-one').click(function() {
        $('#btn-one').toggleClass("cart_clk_one");

    });
    $("#btn-one").one("click", function() {
        $('.cart-one .fa').attr('data-before', '1');
    });

    var prnum = $('.num-one').text();
    $('.inc-one').click(function() {
        if (prnum > 0) {
            prnum++;
            $('.num-one').text(prnum);
            $('.cart-one .fa').attr('data-before', prnum);
        }

    });
    $('.dec-one').click(function() {
        if (prnum > 1) {
            prnum--;
            $('.num-one').text(prnum);
            $('.cart-one .fa').attr('data-before', prnum);
        }

    });

});


$(document).ready(function() {
    $('#btn-two').click(function() {
        $('#btn-two').toggleClass("cart_clk_two");

    });
    $("#btn-two").one("click", function() {
        $('.cart-two .fa').attr('data-before', '1');
    });

    var prnum = $('.num-two').text();
    $('.inc-two').click(function() {
        if (prnum > 0) {
            prnum++;
            $('.num-two').text(prnum);
            $('.cart-two .fa').attr('data-before', prnum);
        }

    });
    $('.dec-two').click(function() {
        if (prnum > 1) {
            prnum--;
            $('.num-two').text(prnum);
            $('.cart-two .fa').attr('data-before', prnum);
        }

    });

});

$(document).ready(function() {
    $('#btn-three').click(function() {
        $('#btn-three').toggleClass("cart_clk_three");

    });
    $("#btn-three").one("click", function() {
        $('.cart-three .fa').attr('data-before', '1');
    });

    var prnum = $('.num-three').text();
    $('.inc-three').click(function() {
        if (prnum > 0) {
            prnum++;
            $('.num-three').text(prnum);
            $('.cart-three .fa').attr('data-before', prnum);
        }

    });
    $('.dec-three').click(function() {
        if (prnum > 1) {
            prnum--;
            $('.num-three').text(prnum);
            $('.cart-three .fa').attr('data-before', prnum);
        }

    });

});

$(document).ready(function() {
    $('#btn-four').click(function() {
        $('#btn-four').toggleClass("cart_clk_four");

    });
    $("#btn-four").one("click", function() {
        $('.cart-four .fa').attr('data-before', '1');
    });

    var prnum = $('.num-four').text();
    $('.inc-four').click(function() {
        if (prnum > 0) {
            prnum++;
            $('.num-four').text(prnum);
            $('.cart-four .fa').attr('data-before', prnum);
        }

    });
    $('.dec-four').click(function() {
        if (prnum > 1) {
            prnum--;
            $('.num-four').text(prnum);
            $('.cart-four .fa').attr('data-before', prnum);
        }

    });

});

$(document).ready(function() {
    $('#btn-five').click(function() {
        $('#btn-five').toggleClass("cart_clk_five");

    });
    $("#btn-five").one("click", function() {
        $('.cart-five .fa').attr('data-before', '1');
    });

    var prnum = $('.num-five').text();
    $('.inc-five').click(function() {
        if (prnum > 0) {
            prnum++;
            $('.num-five').text(prnum);
            $('.cart-five .fa').attr('data-before', prnum);
        }

    });
    $('.dec-five').click(function() {
        if (prnum > 1) {
            prnum--;
            $('.num-five').text(prnum);
            $('.cart-five .fa').attr('data-before', prnum);
        }

    });

});


$(document).ready(function() {
    $('#btn-six').click(function() {
        $('#btn-six').toggleClass("cart_clk_six");

    });
    $("#btn-six").one("click", function() {
        $('.cart-six .fa').attr('data-before', '1');
    });

    var prnum = $('.num-six').text();
    $('.inc-six').click(function() {
        if (prnum > 0) {
            prnum++;
            $('.num-six').text(prnum);
            $('.cart-six .fa').attr('data-before', prnum);
        }

    });
    $('.dec-six').click(function() {
        if (prnum > 1) {
            prnum--;
            $('.num-six').text(prnum);
            $('.cart-six .fa').attr('data-before', prnum);
        }

    });

});


$(document).ready(function() {
    $('#btn-seven').click(function() {
        $('#btn-seven').toggleClass("cart_clk_seven");

    });
    $("#btn-seven").one("click", function() {
        $('.cart-seven .fa').attr('data-before', '1');
    });

    var prnum = $('.num-seven').text();
    $('.inc-seven').click(function() {
        if (prnum > 0) {
            prnum++;
            $('.num-seven').text(prnum);
            $('.cart-seven .fa').attr('data-before', prnum);
        }

    });
    $('.dec-seven').click(function() {
        if (prnum > 1) {
            prnum--;
            $('.num-seven').text(prnum);
            $('.cart-seven .fa').attr('data-before', prnum);
        }

    });

});