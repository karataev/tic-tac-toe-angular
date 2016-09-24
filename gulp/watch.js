var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('./config');

module.exports = function watch() {
  gulp.watch(config.indexHtml).on('change', gulp.series('indexHtml', browserSync.reload));
  gulp.watch(config.js.src).on('change', gulp.series('appJs', browserSync.reload));
  gulp.watch(config.templates.src).on('change', gulp.series('templates', browserSync.reload));
  gulp.watch(config.styles.watch, gulp.series('sass'));
};
