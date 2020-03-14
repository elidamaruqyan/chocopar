$(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
        $(".fixed-top").addClass("dark_bg");
    } else {
        $(".fixed-top").removeClass("dark_bg");
    }
});

$(document).ready(function () {
    new WOW().init();

    $("#owl-demo").owlCarousel({
        pagination: false,
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        touchDrag: false,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $("#owl-demo2").owlCarousel({
        pagination: false,
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        touchDrag: false,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });

    $('.main_fruits').click(function () {
        $(this).toggleClass('chose_fruit');
        $(this).find('.proportion').toggle(200)
    });
    $('.page_wrapper_context span.line_1, span.line_2').css('width', '90px')
});

$( function() {
    $( ".slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 0, 300 ],
        // slide: function( event, ui ) {
        //     $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        // }
    });
} );





