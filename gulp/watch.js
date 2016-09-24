var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('./config');

module.exports = function watch() {
  gulp.watch(config.src + '/index.html').on('change', gulp.series('copyHtml', browserSync.reload));
  gulp.watch('./app/**/*.js').on('change', gulp.series('appJs', browserSync.reload));
};
