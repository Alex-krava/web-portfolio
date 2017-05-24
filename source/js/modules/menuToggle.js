'use strict';

const config = {
    activeClass: 'menuActive'
}

exports.init = function (btn) {
    config.btn = btn;
    config.btn.on('click', this.event);
}

exports.event = function (e) {
    e.preventDefault();
    config.btn.toggleClass(config.activeClass);
}
