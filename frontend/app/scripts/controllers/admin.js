'use strict';

angular.module('swFrontendApp')
  .controller('AdminController', function($http, $scope, users) {
    
    $scope.users = users.query();
    
});