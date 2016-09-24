var gulp = require('gulp');
var concat = require('gulp-concat');

module.exports = function appJs() {
  return gulp.src('./app/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist/js'))
};
