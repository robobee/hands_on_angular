'use strict';

angular.module('swFrontendApp')
  .controller('NavigationController', function($scope, $location) {
    
    $scope.isActive = function(path) {
      return path === $location.path();
    };

  });