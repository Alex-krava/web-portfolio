'use strict';

module.exports = function () {
    $.gulp.task('sprite:png', function () {
        var spriteData = $.gulp.src('./source/sprite/*.{png, gif}').pipe($.sprite({
            imgName: 'sprite.png',
            cssName: 'sprite-png.css'
        }));

        var imgStream = spriteData.img
            .pipe($.buffer())
            .pipe($.gulp.dest('./assets/img'));

        var cssStream = spriteData.css
            .pipe($.gulp.dest('./assets/css'));

        return $.merge(imgStream, cssStream);
    });
}