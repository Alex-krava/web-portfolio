'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')(),
  sprite: require('gulp.spritesmith'),
  buffer: require('vinyl-buffer'),
  merge: require('merge-stream'),
  named: require('vinyl-named')
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'webpack',
    'copy:image',
    'css:foundation',
    'sprite:svg',
    'sprite:png'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
