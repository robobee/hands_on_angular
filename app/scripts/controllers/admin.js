'use strict';

angular.module('swFrontendApp').controller('AdminController', function($http) {
  $http.get('/api/users');
});