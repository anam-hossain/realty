'use strict';

/* Controllers */

var realtyControllers = angular.module('realtyControllers', []);

realtyControllers.controller('PropertyListCtrl', ['$scope', 'Property', 'propertyImage', 'propertyData',
  function($scope, Property, propertyImage, propertyData) {
    // $scope.properties = Property.query();
    // console.log($scope.properties);
    $scope.beds = propertyData.beds();
    $scope.bathrooms = propertyData.bathrooms();
    $scope.garageSpaces = propertyData.garageSpaces();

    // Paginate properties
    $scope.totalProperties = 0;
    $scope.propertiesPerPage = 10; // this should match however many results your API puts on one page
    getResultsPage(1);

    $scope.pagination = {
        current: 1
    };

    $scope.pageChanged = function(newPage) {
        getResultsPage(newPage);
    };

    function getResultsPage(pageNumber) {
      // The following will generate : 
      // http://realty.dev/api/properties?page=1
      Property.get({page:pageNumber}, function(result) {
        $scope.properties = result.data;
        $scope.totalProperties = result.total;
      });
    }

    $scope.isCarSpaceAvailable = function(carSpace) {
      if (carSpace != 0) {
        return true;
      }
      return false;
    }
    
    $scope.getPropertyImage = function(photo) {
      return propertyImage.jpg(photo.name);
    }

    $scope.clearFilters = function() {
      $scope.filter = {};
    }        
  }]);

realtyControllers.controller('PropertyDetailCtrl', ['$scope', '$routeParams', '$location', 'Page', 'Property', 'propertyImage',
  function($scope, $routeParams, $location, Page, Property, propertyImage) {
    $scope.property = Property.get({propertyId: $routeParams.propertyId}, function(property) {
      $scope.mainImageUrl = propertyImage.jpg(property.photos[0].name);
      
      // set page title
      Page.setTitle(property.address);
    });

    $scope.setImage = function(image) {
      $scope.mainImageUrl = propertyImage.jpg(image);
    }

    $scope.deleteProperty = function() {
      $scope.property.$delete({propertyId: $routeParams.propertyId}, function(result) {
        if (result.success) {
          // redirect to home page
          $location.path('/');
        }
      });
    }    
  }
]);


realtyControllers.controller('PropertyAdvertisementCtrl', ['$scope', '$location', 'Page', 'Property', 'propertyData',
  function($scope, $location, Page, Property, propertyData) {
    Page.setTitle("List your property");
    
    $scope.title = "List your property";
    $scope.submitButtonTitle = "List property";

    $scope.propertyTypes = propertyData.propertyTypes();

    $scope.beds = propertyData.beds();

    $scope.bathrooms = propertyData.bathrooms();

    $scope.garageSpaces = propertyData.garageSpaces();

    $scope.property = new Property();
    // Pre-selected items
    $scope.property.beds = $scope.beds[0].number;
    $scope.property.bathrooms = $scope.bathrooms[0].number;

    $scope.processForm = function() {
      $scope.property.$save(function(result) {
        if (result.success) {
          // redirect to home page
          $location.path('/');
        }
      });
    }    
}]);


realtyControllers.controller('PropertyEditCtrl', ['$scope', '$routeParams', '$location', 'Page', 'Property', 'propertyData',
  function($scope, $routeParams, $location, Page, Property, propertyData) {
    Page.setTitle("Edit your property");
    
    $scope.title = "Edit your property";
    $scope.submitButtonTitle = "Update property";

    $scope.propertyTypes = propertyData.propertyTypes();

    $scope.beds = propertyData.beds();

    $scope.bathrooms = propertyData.bathrooms();

    $scope.garageSpaces = propertyData.garageSpaces();

    $scope.property = Property.get({propertyId: $routeParams.propertyId}, function (property) {
      if (property.smoking_allowed == 1) {
        $scope.property.smoking_allowed = true;
      }

      if (property.pets_allowed == 1) {
        $scope.property.pets_allowed = true;
      }
      
    });
    
    $scope.processForm = function() {
      $scope.property.$update({ propertyId:$routeParams.propertyId }, function(result) {
        if (result.success) {
          // redirect to home page
          $location.path('/');
        }
      });
    }       
}]);

realtyControllers.controller('LayoutsCtrl', ['$scope', 'Page',
  function($scope, Page) {
    $scope.Page = Page;
}]);

realtyControllers.controller('WidgetsCtrl', ['$scope', '$route',
  function($scope, $route) {
    $scope.$route = $route;
}]);