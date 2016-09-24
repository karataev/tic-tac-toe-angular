
module.exports = {
  src: './app',
  dist: './dist',
  js: {
    src: './app/**/*.js',
    dist: './dist/js'
  },
  styles: {
    src: './app/app.scss',
    dist: './dist/css',
    watch: './app/**/*.scss'
  },
  templates: {
    src: ['./app/**/*.html', '!./app/index.html'],
    dist: './dist/js'
  },
  indexHtml: './app/index.html',
  production: false
};
