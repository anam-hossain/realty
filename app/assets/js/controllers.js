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

realtyControllers.controller('PropertyDetailCtrl', ['$scope', '$routeParams', 'Page', 'Property', 'propertyImage',
  function($scope, $routeParams, Page, Property, propertyImage) {
    $scope.property = Property.get({propertyId: $routeParams.propertyId}, function(property) {
      $scope.mainImageUrl = propertyImage.jpg(property.photos[0].name);
      
      // set page title
      Page.setTitle(property.address);
    });

    $scope.setImage = function(image) {
      $scope.mainImageUrl = propertyImage.jpg(image);
    }
  }
]);


realtyControllers.controller('PropertyAdvertisementCtrl', ['$scope', 'Page',
  function($scope, Page) {
    Page.setTitle("List your property");
    
    $scope.propertyTypes = [
      { value: 'unit', name: 'Unit' },
      { value: 'house', name: 'House' },
      { value: 'apartment', name: 'Apartment' },
    ];

    $scope.beds = [
      { value: 1, number: 1 },
      { value: 2, number: 2 },
      { value: 3, number: 3 },
      { value: 4, number: 4 },
      { value: 5, number: 5 },
      { value: 6, number: 6 },
      { value: 7, number: 7 },
      { value: 8, number: 8 },
      { value: 9, number: 9 },
      { value: 10, number: 10 }
    ];

    $scope.bathrooms = [
      { value: 1, number: 1 },
      { value: 2, number: 2 },
      { value: 3, number: 3 },
      { value: 4, number: 4 },
      { value: 5, number: 5 }
    ];

    $scope.garageSpaces = [
      { value: 1, number: 1 },
      { value: 2, number: 2 },
      { value: 3, number: 3 },
      { value: 4, number: 4 },
      { value: 5, number: 5 }
    ];

    // Pre-selected items
    $scope.selectedBed = $scope.beds[0].number;
    $scope.selectedBathroom = $scope.bathrooms[0].number;
    $scope.selectedGarageSpace = $scope.garageSpaces[0].number;
}]);

realtyControllers.controller('LayoutsCtrl', ['$scope', 'Page',
  function($scope, Page) {
    $scope.Page = Page;
}]);

realtyControllers.controller('WidgetsCtrl', ['$scope', '$route',
  function($scope, $route) {
    $scope.$route = $route;
}]);