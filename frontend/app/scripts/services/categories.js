'use strict';

angular.module('swFrontendApp').factory('categories', function($resource) {
  return $resource('/api/categories');
});