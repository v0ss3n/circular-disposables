$(document).ready(function () {
    $('.process-carousel').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear'
    });

    $('.final-carousel').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear'
    });


    $('.color-carousel').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear'
    });

    $('.masks_process-carousel').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear'
    });

    $('.final-pouches-carousel').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear'
    });

    $('.final-overview-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear'
    });

    window.addEventListener("hashchange", function () {
        window.scrollTo(window.scrollX, window.scrollY - 100);
    });
});