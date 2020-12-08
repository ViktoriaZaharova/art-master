$('.btn-burger').click(function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').click(function () {
    $('.mobile-menu').fadeOut();
});

$('[name="phone"]').mask('+7 (999) 999-99-99')

// slick
$('.main-home__slider').slick({
    slidesToShow: 1,
    arrows: true,
    dots: true,
    fade: true,
});

$('.video-slider').slick({
    slidesToShow: 1,
    arrows: true,
    fade: true,
});

$('.partners-slider').slick({
    slidesToShow: 5,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 360,
            settings: {
                slidesToShow: 1,
            }
        }

    ]
});

// map
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [53.1355,45.0225],
            zoom: 17,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: ''
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/img/kontakts/logomap.png',
            iconImageSize: [51, 78],
            iconImageOffset: [-30, -70]
        });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
    zoomControl = new ymaps.control.ZoomControl({options: { position: { right: 15, top: 130 }}});
    myMap.controls.add(zoomControl);
});
