var config = require('./config');
var del = require('del');

module.exports = function clean() {
  return del(['./dist']);
};