'use strict';

angular.module('swFrontendApp').controller('LoginController', function($scope) {
  $scope.login = function() {
    if ($scope.loginForm.$valid) {
      console.log('send to server');
    } else {
      $scope.loginForm.submitted = true;
    }
  };
});