'use strict';

/**
 * @ngdoc function
 * @name swFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the swFrontendApp
 */
angular.module('swFrontendApp')
  .controller('EdgesController', function ($scope, edges) {
    $scope.edges = edges.query();

    var selectedEdge = null;

    $scope.selectEdge = function(edge) {
      selectedEdge = (selectedEdge === edge) ? null : edge;
    };

    $scope.isSelected = function(edge) {
      return edge === selectedEdge;
    };

    $scope.displayRequirements = function(reqs) {
      var result = '';
      for (var i = 0; i < reqs.length; i++) {
        if (result !== '') { result += ', '; }
        if (reqs[i].name) {
          result += reqs[i].name + ' '; 
        }
        result += reqs[i].value;
      }
      return result;
    }
  });
