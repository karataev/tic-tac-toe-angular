var gulp = require('gulp');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');
var config = require('./config');
var babel = require('gulp-babel');

module.exports = function appJs() {
  return gulp.src(config.js.src)
    .pipe(concat('bundle.js'))
    .pipe(ngAnnotate())
    // .pipe(gulpIf(config.production, babel()))
    .pipe(babel())
    .pipe(gulpIf(config.production, uglify()))
    .pipe(gulp.dest(config.js.dist))
};
