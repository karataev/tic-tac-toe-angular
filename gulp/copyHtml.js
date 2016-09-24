var gulp = require('gulp');
var config = require('./config');

module.exports = function copyHtml() {
  return gulp.src('./app/index.html')
    .pipe(gulp.dest(config.dist))
};
