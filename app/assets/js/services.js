'use strict';

/* Services */

var realtyServices = angular.module('realtyServices', ['ngResource']);

realtyServices.factory('Property', ['$resource',
  function($resource) {
    return $resource('/api/properties/:propertyId');
  }
]);

realtyServices.factory('Page', function() {
 var title = 'Realty';
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { 
      title = newTitle + " - Realty";
    }
  };
});

realtyServices.service('propertyImage', function() {
	var dir = "images/";

  return {
    jpg : function(name) {
      return dir + name + ".jpg";
    },
    png : function(name) {
      return dir + name + ".png";
    }
  };
});