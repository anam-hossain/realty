'use strict';

/* App Module */

var phonecatApp = angular.module('realtyApp', [
  'ngRoute',
  'realtyControllers',
  'realtyFilters',
  'realtyServices'
]);

phonecatApp.config(['$routeProvider',
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
        redirectTo: '/properties'
      });
  }
]);
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

'use strict';

/* Filters */

angular.module('realtyFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
'use strict';

/* Services */

var realtyServices = angular.module('realtyServices', ['ngResource']);

realtyServices.factory('Property', ['$resource',
  function($resource) {
    return $resource('/api/properties/:propertyId');
  }
]);