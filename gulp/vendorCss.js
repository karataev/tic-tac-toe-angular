var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('./config');

module.exports = function vendorCss() {
  return gulp.src([
    'node_modules/normalize-css/normalize.css',
    'node_modules/bootstrap/dist/css/bootstrap.css'
  ])
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./dist/css'))
}