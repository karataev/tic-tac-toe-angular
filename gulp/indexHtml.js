var gulp = require('gulp');
var config = require('./config');

module.exports = function indexHtml() {
  return gulp.src('./app/index.html')
    .pipe(gulp.dest(config.dist))
};
