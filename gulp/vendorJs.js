var gulp = require('gulp');
var concat = require('gulp-concat');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');
var config = require('./config');

module.exports = function vendorJs() {
  return gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/angular/angular.js',
    'node_modules/lodash/lodash.js'
  ])
    .pipe(concat('vendor.js'))
    .pipe(gulpIf(config.production, uglify()))
    .pipe(gulp.dest('./dist/js'))
};
