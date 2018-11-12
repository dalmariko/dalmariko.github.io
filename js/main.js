$(function () {

    $('.main-slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        // autoplay: true,
        // autoplaySpeed: 2000,
    });


    $(window).on('resize', function () {
        if ($(window).width() < 768) {
            $('#hsr').appendTo('.mobileMenuRight');
            $('#hfl').appendTo('.mobileMenuLeft');
            $('#hfr').appendTo('.mobileMenuLeft');
            $('.headerBottom').slideUp();
        } else {
            $('#hfl').appendTo('.headerFerst  .myRow');
            $('#hfr').appendTo('.headerFerst  .myRow');
            $('#hsr').appendTo('.headerSecond  .myRow');
            $('.headerBottom').slideDown();
        }
    });
    $(window).trigger('resize');
    $('.toggleBtn').on('click', function () {
        $('.headerBottom').slideToggle();
    });


    let maxSliders = document.querySelectorAll('[data-slick-index]').length - 1;
    console.log(maxSliders);


    window.addEventListener('load', () => {
        document.body.style.overflow = 'hidden';
    });

    let activeSlider = document.querySelector('.slick-active');
    let slickSlider = document.querySelector('.slick-list');


    slickSlider.addEventListener('click', e => {
            let id = e.target.closest("[data-slick-index]").dataset.slickIndex;
            if (maxSliders === id * 1) {
                document.body.style.overflow = 'auto';
                console.log('last slider')
            }

    });


});


window.addEventListener('scroll', e => {
    var scrolled = window.pageYOffset = 0 || document.documentElement.scrollTop;
    document.getElementById('showScroll').innerHTML = scrolled + 'px';
});






