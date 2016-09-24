var gulp = require('gulp');

function getTask(task) {
  return require('./gulp/' + task);
}

gulp.task('clean', getTask('clean'));
gulp.task('browserSync', getTask('browserSync'));
gulp.task('indexHtml', getTask('indexHtml'));
gulp.task('appJs', getTask('appJs'));
gulp.task('vendorJs', getTask('vendorJs'));
gulp.task('templates', getTask('templates'));
gulp.task('sass', getTask('sass'));
gulp.task('vendorCss', getTask('vendorCss'));
gulp.task('watch', getTask('watch'));

gulp.task('build:dev', gulp.series(
  'clean',
  gulp.parallel('indexHtml', 'appJs', 'vendorJs', 'templates', 'sass', 'vendorCss')
));

gulp.task('serve', gulp.series(
  'build:dev',
  gulp.parallel('browserSync', 'watch')
));
