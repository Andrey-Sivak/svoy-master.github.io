'use strict';
import * as $ from 'jquery';
import './jquery.inputmask.min';
import './slick.min';


const mobileWidth = 767;
let isMobile = checkWidth();

window.addEventListener('resize', () => {
    isMobile = checkWidth();
});

setTimeout(() => {
    if (!document.querySelector('.loader')) {
        return;
    }

    const loader = document.querySelector('.loader');
    if (loader.classList.contains('active')) {
        loader.classList.remove('active');

        setTimeout(() => {
            loader.parentElement.removeChild(loader);
        }, 300)
    }
}, 2500);

window.addEventListener('load', function () {

    (function loader() {
        if (!document.querySelector('.loader')) {
            return;
        }

        const loader = document.querySelector('.loader');

        if (loader.classList.contains('active')) {
            loader.classList.remove('active');
        }

        setTimeout(() => {
            loader.parentElement.removeChild(loader);
        }, 1500);

    })();

    (function slider() {
        if (!document.querySelector('.seven-section__slider')) {
            return;
        }

        $('.seven-section__slider').slick({
            infinite: true,
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 3000,
            swipeToSlide: true,
            prevArrow: '<span class="slider-arrow prev"></span>',
            nextArrow: '<span class="slider-arrow next"></span>',
            responsive: [
                /*{
                    breakpoint: 475,
                    settings: {
                        slidesToShow: 4,
                    }
                },*/
            ]
        })
    })();

    (function inputMask() {
        $(".phone-mask").inputmask({
            mask:"+7(999)999-99-99",
            "clearIncomplete": true
        });
    })();

});

function checkWidth() {
    return mobileWidth > document.documentElement.clientWidth;
}