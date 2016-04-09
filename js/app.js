'use strict';

/* App Module */

var itinApp = angular.module('itinApp', [
  'ngRoute',
  'itinControllers'
]);

itinApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/map.html',
        controller: 'MapControl'
      }).
      otherwise({
        templateUrl: 'partials/map.html',
        controller: 'MapControl'
      });
  }]);
