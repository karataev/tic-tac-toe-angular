var gulp = require('gulp');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');
var config = require('./config');

module.exports = function appJs() {
  return gulp.src('./app/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(ngAnnotate())
    .pipe(gulpIf(config.production, uglify()))
    .pipe(gulp.dest('./dist/js'))
};
