var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var config = require('./config');

module.exports = function templates() {
  return gulp.src(config.templates.src)
    .pipe(templateCache({
      standalone: false
    }))
    .pipe(gulp.dest(config.templates.dist))
};
