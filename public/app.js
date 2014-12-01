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
        templateUrl: 'partials/property-list.html',
        controller: 'PropertyListCtrl'
      }).
      when('/properties/:propertyId', {
        templateUrl: 'partials/property-detail.html',
        controller: 'PropertyDetailCtrl'
      }).
      otherwise({
        templateUrl: 'partials/property-list.html',
        controller: 'PropertyListCtrl'
      });
  }
]);
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