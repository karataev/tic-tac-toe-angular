var gulp = require('gulp');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');

module.exports = function appJs() {
  return gulp.src('./app/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('./dist/js'))
};
