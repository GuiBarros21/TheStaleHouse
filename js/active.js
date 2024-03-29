(function ($) {
    'use strict';

    if ($.fn.owlCarousel) {
        // Hero Slider Active Code
        $(".stable-hero-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            margin: 0,
            nav: true,
            navText: ['', '<i class="fa fa-arrow-right" aria-hidden="true"></i>']
        })
        var wel_slides = $('.stable-hero-slides');
        wel_slides.owlCarousel();
        wel_slides.on('translate.owl.carousel', function (event) {
            $('.hero-content h2').removeClass('animated').hide();
            $('.hero-content p').removeClass('animated').hide();
            $('.hero-content .btn').removeClass('animated').hide();
            $('.hero-slides-nav, .stable-hero-area .owl-next').removeClass('animated').hide();
        })
        wel_slides.on('translated.owl.carousel', function (event) {
            $('.hero-content h2').addClass('animated fadeIn').show();
            $('.hero-content p').addClass('animated fadeIn').show();
            $('.hero-content .btn').addClass('animated fadeIn').show();
            $('.hero-slides-nav, .stable-hero-area .owl-next').addClass('animated fadeInUp').show();
        })
        // Testimonials Slider Active Code
        $(".stable-testimonials-slides").owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            margin: 0,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 2
                }
            }
        })
        // Menu Slider Active Code
        $(".stable-menu-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            autoplayTimeout: 12000,
            margin: 0,
            nav: true,
            navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>']
        })
    }
    
    // Btn ScrollDown Active Code
    $("#menubtn").on('click', function () {
        $('html, body').animate({
            scrollTop: $("#menu").offset().top - 100
        }, 1500);
    });

    // :: 4.0 ScrollUp Active JS
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="pe-7s-angle-up" aria-hidden="true"></i>'
        });
    }

    // onePageNav Active Code
    if ($.fn.onePageNav) {
        $('#stableMenu').onePageNav({
            currentClass: 'active',
            scrollSpeed: 2000,
            easing: 'easeOutQuad'
        });
    }

    // PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // wow Active Code
    if ($.fn.init) {
        new WOW().init();
    }
    
    var $window = $(window);

    // Sticky Active JS
    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('body').addClass('sticky');
        } else {
            $('body').removeClass('sticky');
        }
    });

    // Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);