'use strict';

/* Services */

var realtyServices = angular.module('realtyServices', ['ngResource']);

realtyServices.factory('Property', ['$resource',
  function($resource) {
    return $resource('/api/properties/:propertyId', {},
      {
        'update': { method:'PUT' }
      });
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


realtyServices.service('propertyData', function() {
  return {
    propertyTypes: function() {
      return [
        { value: 'unit', name: 'Unit' },
        { value: 'house', name: 'House' },
        { value: 'apartment', name: 'Apartment' },
      ];
    },
    beds: function() { 
      return [
        { value: "1", number: "1" },
        { value: "2", number: "2" },
        { value: "3", number: "3" },
        { value: "4", number: "4" },
        { value: "5", number: "5" },
        { value: "6", number: "6" },
        { value: "7", number: "7" },
        { value: "8", number: "8" },
        { value: "9", number: "9" },
        { value: "10", number: "10" }
      ];
    },
    bathrooms: function() {
      return [
        { value: "1", number: "1" },
        { value: "2", number: "2" },
        { value: "3", number: "3" },
        { value: "4", number: "4" },
        { value: "5", number: "5" }
      ];
    },
    garageSpaces: function() {
      return [
        { value: "1", number: "1" },
        { value: "2", number: "2" },
        { value: "3", number: "3" },
        { value: "4", number: "4" },
        { value: "5", number: "5" }
      ];
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