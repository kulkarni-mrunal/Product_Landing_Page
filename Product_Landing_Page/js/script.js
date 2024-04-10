/**************video slider starts *********/
$(document).ready(function () {
    var slider = $('.video-slider');

    slider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // dots:true,
        centerPadding: '120px',
        prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
        nextArrow: '<button type="button" class="slick-next"><img class="img-fluid" src="images/next-arrow.png"></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        autoplay: false,
        infinite: false
    });

    slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        // Hide previous button on the first slide
        if (nextSlide === 0) {
            $('.slick-prev').hide();
        } else {
            $('.slick-prev').show();
        }

        // Hide next button on the last slide
        if (nextSlide === slick.slideCount - 1) {
            $('.slick-next').hide();
        } else {
            $('.slick-next').show();
        }
    });
});
  /**************video slider end *********/
