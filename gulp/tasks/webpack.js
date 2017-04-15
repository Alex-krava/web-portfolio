'use strict';

module.exports = function () {
    $.gulp.task('webpack', function () {
        return $.gulp.src('source/js/*.js')
            .pipe($.named())
            .pipe($.gp.webpack())
            .pipe($.gulp.dest('build/assets/js'));
    });
};