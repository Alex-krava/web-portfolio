'use strict';

//foundation
window.$ = window.jQuery = require('jquery');
const svg4everybody = require('svg4everybody')();

//requires
var flip = require('./modules/flip');
var menuToggle = require('./modules/menuToggle');

//init
if($('.btn__admin').length) {
    flip.init($('.btn__admin'));
}
if($('.toggle-flip').length) {
    flip.toggleFlip($('.toggle-flip'));
}
if($('.header-about__link').length) {
    menuToggle.init($('.header-about__link'));
}
