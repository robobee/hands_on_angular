'use strict';

/**
 * @ngdoc function
 * @name swFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the swFrontendApp
 */
angular.module('swFrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
