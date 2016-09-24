var gulp = require('gulp');
var config = require('./config');

module.exports = function indexHtml() {
  return gulp.src(config.indexHtml)
    .pipe(gulp.dest(config.dist))
};
