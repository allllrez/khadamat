/*===========================================================
                        preloader
============================================================*/
$(window).on('load', function() {

    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');


});

/*===========================================================
                        owl carousel
============================================================*/

$(function() {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        nav: true,
        dots: false,

        navText: ['<i class="fa fa-angel-left"></i>', '<i class="fa fa-angel-right"></i>']
    });
});


/*===========================================================
                        skill
============================================================*/

$(function() {

    $("#progress-elements").waypoint(function() {

        $(".progress-bar").each(function() {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);

        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});
/*===========================================================
                        responsiv tabs
============================================================*/
$(function() {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'

    });



});

/*===========================================================
                        portfolio
============================================================*/
$(window).on('load', function() {

    // Initialize Isotope
    $("#isotope-container").isotope({});

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function() {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/*===========================================================
                        portfolio
============================================================*/
$(function() {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {

            enabled: true
        }

    });

});
/*===========================================================
                       testimonial
============================================================*/

$(function() {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,

        navText: ['<i class="fa fa-angel-left"></i>', '<i class="fa fa-angel-right"></i>']
    });
});

/*===========================================================
                       navigation



                       
$(function() {

    $(document).scroll(function() {


        $(window).scroll(function() {
            if ($(document).scrollTop() > 500) {

                $("#navbar-scroll").css("background-color", "#fff");
                $(".nav-link").css("color", "#212226");
            } else {
                $(".sticky-top").css("background-color", "transparent");

            }
        })
    });





});
============================================================*/


/*===========================================================
                       testimonial
============================================================*/

$(function() {

    new WOW().init();
});


$(window).on('load', function() {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-1").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down").addClass("animated fadeInDown infinite");
    $("#about-l").addClass("animated  fadeInLeft");
    $("#about-right").addClass("animated  fadeInRight");
    $("#about-01-img").addClass("animated  fadeInUp");
    $("#about-item-01").addClass("animated  fadeInLeft");
    $("#about-item-02").addClass("animated  fadeInUp");
    $("#about").addClass("animated  fadeInRight");
    $("#team-members").addClass("animated  fadeInRight");
    $("#team-left").addClass("animated  fadeInLeft");
    $("#progress-elements").addClass("animated  fadeInUp");
    $("#services-header").addClass("animated  fadeInDown");
    $("#services-contents").addClass("animated  fadeInRight");
    $("#services-imgs").addClass("animated  fadeInLeft");
    $("#isotope-container ").addClass("animated  fadeInUp");
    $("#suggestion ").addClass("animated  fadeInLeft");
    $("#blog-left ").addClass("animated  fadeInLeft");
    $("#blog-comment ").addClass("animated  fadeInRight");


});