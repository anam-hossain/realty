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
        templateUrl: 'partials/properties/list.html',
        controller: 'PropertyListCtrl',
        activetab: 'home'
      }).
      when('/properties/:propertyId', {
        templateUrl: 'partials/properties/detail.html',
        controller: 'PropertyDetailCtrl',
        activetab: ''
      }).
      when('/properties/advertise', {
        templateUrl: 'partials/properties/advertise.html',
        controller: 'PropertyAdvertisementCtrl',
        activetab: 'advertise'
      }).
      otherwise({
        templateUrl: 'partials/properties/list.html',
        controller: 'PropertyListCtrl',
        activetab: 'home'
      });
  }
]);