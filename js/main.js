$(document).ready(function () {
    const mMenuBtn = $('.m-menu-btn');
    const mMenu = $('.m-menu');
    const tab = $('.cast__title');

    mMenuBtn.on('click', function () {
        mMenu.toggleClass('active');
        mMenuBtn.toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

    tab.on('click', function () {
        tab.removeClass('cast__title_active');
        $(this).toggleClass('cast__title_active');
        const activeTabContent = $(this).attr('data-target');
        $('.cast__tabs-content').removeClass('visible');
        $(activeTabContent).toggleClass('visible');
    });

    const mySwiper = new Swiper ('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 25,
        loop: true,
        breakpoints: {
            992: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 1,
                navigation: {
                    nextEl: '.btn-next',
                }
            }
        }
    });
});