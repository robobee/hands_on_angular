'use strict';

angular.module('swFrontendApp')
  .directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/navbar.html',
      controller: 'NavigationController'
    }
  });