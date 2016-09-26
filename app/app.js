
angular.module('templates', []);
var app = angular.module('app', ['templates', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  var introState = {
    name: 'intro',
    url: '/intro',
    template: '<main-menu></main-menu>'
  };

  var gameplayState = {
    name: 'gameplay',
    url: '/gameplay',
    template: '<gameplay></gameplay>'
  };

  $stateProvider.state(introState);
  $stateProvider.state(gameplayState);

  $urlRouterProvider.otherwise('/intro');
});