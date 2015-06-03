'use strict';

angular.module('swFrontendApp').factory('users', function($resource) {
  return $resource('/api/users');
});
