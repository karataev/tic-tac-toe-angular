var gulp = require('gulp');
var config = require('./gulp/config');

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

gulp.task('parseParams', function(done) {
  var param = process.argv[3];
  if (param === '-p') config.production = true;
  done();
});

gulp.task('build', gulp.series(
  'parseParams',
  'clean',
  gulp.parallel('indexHtml', 'appJs', 'vendorJs', 'templates', 'sass', 'vendorCss')
));

gulp.task('serve', gulp.series(
  'build',
  gulp.parallel('browserSync', 'watch')
));
