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
    arrows: false,
    dots: false,
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

$('.logo-line__portfolio-slider').slick({
    slidesToShow: 3,
    dots: true,
    responsive: [
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});

$('.logo-line__slider1').slick({
    slidesToShow: 1
});

$('.design-slider').slick({
    slidesToShow: 1
});

$('.modal').on('shown.bs.modal', function (e) {
    $(this).find('.slick-slider').slick('setPosition');
});

// активная ссылка меню
$('.services-menu li a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location == link) {
        $(this).addClass('active');
    }
});
// end

// reviews box
$('.reviews-box blockquote').each(function () {
    if ($(this).find('p').length > 1) {
        $(this).find('p').slice(1).hide();
        $(this).append('<a href="#" class="more-reviews">читать полностью</a>');
    }
});

$('.more-reviews').on('click', function(e){
    e.preventDefault();

    var
        $this = $(this),
        content = $(this).parent('.reviews-box blockquote').find('p');


    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');
        $this.html('скрыть');
        content.slideDown();
    } else {
        $this.removeClass('trigger');
        $this.html('читать полностью');

        content.slice(1).slideUp();
    }
});

$('.fancybox-item').fancybox();

// $(".countdown-time1").countdowntimer({
//     hours: '74',
//     minutes: '45',
//     labelsFormat: true,
//     displayFormat: "DHM",
//     // currentTime: true,
// });

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
