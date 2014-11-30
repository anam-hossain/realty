'use strict';

/* App Module */

var realtyApp = angular.module('realtyApp', [
  'ngRoute',
  'realtyControllers',
  'realtyFilters',
  'realtyServices'
]);

realtyApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/properties', {
        templateUrl: 'partials/property-list.html',
        controller: 'PropertyListCtrl'
      }).
      when('/properties/:propertyId', {
        templateUrl: 'partials/property-detail.html',
        controller: 'PropertyDetailCtrl'
      }).
      otherwise({
        redirectTo: '/properties'
      });
  }
]);