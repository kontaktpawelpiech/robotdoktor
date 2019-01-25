'use strict';

// sticky nav
var nav = document.querySelector('.nav');

var checkY = function () {
    if (window.pageYOffset != 0) {
        nav.className = 'nav sticky';
    } else {
        nav.className = 'nav';
    }
}

checkY();

window.addEventListener('scroll', checkY, false);

// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    header: '[data-scroll-header]'
});
