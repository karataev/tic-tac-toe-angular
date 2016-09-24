var gulp = require('gulp');

function getTask(task) {
  return require('./gulp/' + task);
}

gulp.task('clean', getTask('clean'));
gulp.task('browserSync', getTask('browserSync'));
gulp.task('copyHtml', getTask('copyHtml'));
gulp.task('appJs', getTask('appJs'));
gulp.task('vendorJs', getTask('vendorJs'));
gulp.task('watch', getTask('watch'));

gulp.task('build:dev', gulp.series(
  'clean',
  gulp.parallel('copyHtml', 'appJs', 'vendorJs')
));

gulp.task('serve', gulp.series(
  'build:dev',
  gulp.parallel('browserSync', 'watch')
));
