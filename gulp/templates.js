var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');

module.exports = function templates() {

  return gulp.src('./app/**/*.html')
    .pipe(templateCache({
      standalone: false
    }))
    .pipe(gulp.dest('./dist/js'))
};
