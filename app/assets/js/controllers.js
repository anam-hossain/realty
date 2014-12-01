'use strict';

/* Controllers */

var realtyControllers = angular.module('realtyControllers', []);

realtyControllers.controller('PropertyListCtrl', ['$scope', 'Property',
  function($scope, Property) {
    $scope.properties = Property.query();
    $scope.imageDir = "images/";
    $scope.ext = '.jpg';

    $scope.isCarSpaceAvailable = function(carSpace) {
      if (carSpace != 0) {
        return true;
      }
      return false;
    }
    
    $scope.propertyImage = function(photo) {
      return this.imageDir + photo.name + this.ext;
    }        
  }]);

realtyControllers.controller('PropertyDetailCtrl', ['$scope', '$routeParams', 'Property',
  function($scope, $routeParams, Property) {
    console.log($routeParams.propertyId);
    $scope.property = Property.get({propertyId: $routeParams.propertyId}, function(property) {
      $scope.mainImageUrl = "images/" + property.photos[0].name + '.jpg';
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = "images/" + imageUrl + '.jpg';
    }
  }
]);