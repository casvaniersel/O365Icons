'use strict';

/**
 * @ngdoc overview
 * @name o365IconsApp
 * @description
 * # o365IconsApp
 *
 * Main module of the application.
 */
angular
  .module('o365IconsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/howto', {
        templateUrl: 'views/howto.html',
        controller: 'HowCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
