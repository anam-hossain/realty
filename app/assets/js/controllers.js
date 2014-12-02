'use strict';

/* Controllers */

var realtyControllers = angular.module('realtyControllers', []);

realtyControllers.controller('PropertyListCtrl', ['$scope', 'Property', 'propertyImage',
  function($scope, Property, propertyImage) {
    $scope.properties = Property.query();

    $scope.isCarSpaceAvailable = function(carSpace) {
      if (carSpace != 0) {
        return true;
      }
      return false;
    }
    
    $scope.getPropertyImage = function(photo) {
      return propertyImage.jpg(photo.name);
    }        
  }]);

realtyControllers.controller('PropertyDetailCtrl', ['$scope', '$routeParams', 'Property', 'propertyImage',
  function($scope, $routeParams, Property, propertyImage) {
    $scope.property = Property.get({propertyId: $routeParams.propertyId}, function(property) {
      $scope.mainImageUrl = propertyImage.jpg(property.photos[0].name);
    });

    $scope.setImage = function(image) {
      $scope.mainImageUrl = propertyImage.jpg(image);
    }
  }
]);


realtyControllers.controller('PropertyAdvertisementCtrl', ['$scope', 'Property', 'propertyImage',
  function($scope, Property, propertyImage) {
    console.log("Property Advertisement Controller"); 
  }]);