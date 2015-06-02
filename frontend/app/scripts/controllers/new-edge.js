'use strict';

angular.module('swFrontendApp')
  .controller('NewEdgeController', function($scope, edges, ranks, categories) {

    $scope.newEdge = new edges;
    $scope.ranks = $scope.ranks.slice(1);
    $scope.categories = categories.query();

    $scope.createEdge = function() {
      var edge = $scope.newEdge.$save();
      edge.then(function(response) {
        $scope.edges.push(response);
        $scope.newEdge = new edges;
      });
    };
});
