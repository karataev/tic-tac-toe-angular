var gulp = require('gulp');
var concat = require('gulp-concat');

module.exports = function vendorJs() {
  return gulp.src([
    'node_modules/angular/angular.js',
    'node_modules/lodash/lodash.js'
  ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./dist/js'))
};
