$('.js-objects').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
});

$('.js-objects-right').on('click', function () {
    $('.js-objects').slick('slickNext');
});

$('.js-objects-left').on('click', function () {
    $('.js-objects').slick('slickPrev');
});

