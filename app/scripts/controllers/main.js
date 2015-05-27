'use strict';

/**
 * @ngdoc function
 * @name swFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the swFrontendApp
 */
angular.module('swFrontendApp')
  .controller('MainCtrl', function ($scope, $resource) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
