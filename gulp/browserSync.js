var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('./config');

module.exports = function bSync() {
  browserSync.init({
    server: {
      baseDir: config.dist
    }
  })
};
