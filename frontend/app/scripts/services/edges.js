'use strict';

angular.module('swFrontendApp').factory('edges', function($resource) {
  return $resource('/api/edges/:id', {id: '@id'});
});
