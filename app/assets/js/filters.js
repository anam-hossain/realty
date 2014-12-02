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