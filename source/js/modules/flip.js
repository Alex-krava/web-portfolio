'use strict';

const config = {
    flipElem: $('.flip-container'),
    backClass: 'flip-container_back'
}

exports.init = function (btn) {
    config.btn = btn;
    this.events();
}

exports.events = function () {
    config.btn.on('click', this.flipCard);
}

exports.flipCard = function (e) {
    e.preventDefault();
    config.flipElem.addClass(config.backClass);
}

exports.toggleFlip = function (btn) {
    btn.on('click', function (e) {
        e.preventDefault();
        config.flipElem.removeClass(config.backClass);
    });
}
