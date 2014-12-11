'use strict';

/* App Module */

var realtyApp = angular.module('realtyApp', [
  'ngRoute',
  'angularUtils.directives.dirPagination',
  'realtyControllers',
  'realtyFilters',
  'realtyServices'
]);

realtyApp.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('/bower_components/angular-utils-pagination/dirPagination.tpl.html');
});

realtyApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/properties', {
        templateUrl: 'partials/properties/list.html',
        controller: 'PropertyListCtrl',
        activetab: 'home'
      }).
      when('/properties/advertise', {
        templateUrl: 'partials/properties/form.html',
        controller: 'PropertyAdvertisementCtrl',
        activetab: 'advertise'
      }).
      when('/properties/:propertyId', {
        templateUrl: 'partials/properties/detail.html',
        controller: 'PropertyDetailCtrl',
        activetab: ''
      }).
      when('/properties/:propertyId/edit', {
        templateUrl: 'partials/properties/form.html',
        controller: 'PropertyEditCtrl',
        activetab: 'edit'
      }).
      otherwise({
        templateUrl: 'partials/properties/list.html',
        controller: 'PropertyListCtrl',
        activetab: 'home'
      });
  }
]);