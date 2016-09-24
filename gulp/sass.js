var gulp = require('gulp');
var config = require('./config');
var gulpIf = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

function dev() {
  return gulp.src('./app/app.scss')
    // .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers:['last 2 versions']
    }))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
}

function prod() {
  return gulp.src(config.css.entry)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers:['last 2 versions']
    }))
    .pipe(gulp.dest(config.css.dest))
}

module.exports = function sass() {
  return dev();
  // return config.isProduction ? prod() : dev();
}
