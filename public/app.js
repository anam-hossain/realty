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
        controller: 'PropertyListCtrl'
      }).
      when('/properties/:propertyId', {
        templateUrl: 'partials/properties/detail.html',
        controller: 'PropertyDetailCtrl'
      }).
      when('/properties/advertise', {
        templateUrl: 'partials/properties/advertise.html',
        controller: 'PropertyAdvertisementCtrl'
      }).
      otherwise({
        templateUrl: 'partials/properties/list.html',
        controller: 'PropertyListCtrl'
      });
  }
]);
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

'use strict';

/* Filters */

var realtyFilters = angular.module('realtyFilters', []);

realtyFilters.filter('ucfirst', function() {
  return function(input) {
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
    return $resource('/api/properties/:propertyId');
  }
]);

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