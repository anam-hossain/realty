'use strict';

/* Controllers */

var realtyControllers = angular.module('realtyControllers', []);

realtyControllers.controller('PropertyListCtrl', ['$scope', 'Property',
  function($scope, Property) {
    $scope.properties = Property.query();
    $scope.orderProp = 'id';
  }]);

realtyControllers.controller('PropertyDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Property) {
    $scope.property = Property.get({propertyId: $routeParams.propertyId}, function(property) {
      $scope.mainImageUrl = Property.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }
]);