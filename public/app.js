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
'use strict';

/* Controllers */

var realtyControllers = angular.module('realtyControllers', []);

realtyControllers.controller('PropertyListCtrl', ['$scope', 'Property', 'propertyImage', 'propertyData',
  function($scope, Property, propertyImage, propertyData) {
    $scope.properties = Property.query();

    $scope.beds = propertyData.beds();
    $scope.bathrooms = propertyData.bathrooms();
    $scope.garageSpaces = propertyData.garageSpaces();

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

'use strict';

/* Filters */

var realtyFilters = angular.module('realtyFilters', []);

realtyFilters.filter('ucfirst', function() {
  return function(input) {
    if (! input) return;
    return input.charAt(0).toUpperCase() + input.slice(1);
  };
});

realtyFilters.filter('strLimit', ['$filter', function($filter) {
  return function(input, limit) {
  	if (input.length <= limit) {
  		return input;
  	}

    return $filter('limitTo')(input, limit) + '...';
  };
}]);

realtyFilters.filter('nl2br', function($sce) {
    return function(msg,is_xhtml) { 
        var is_xhtml = is_xhtml || true;
        var breakTag = (is_xhtml) ? '<br />' : '<br>';
        var msg = (msg + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
        return $sce.trustAsHtml(msg);
    }
});
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