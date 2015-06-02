'use strict';

angular.module('swFrontendApp')
  .controller('FiltersController', function($scope, filterBy, ranks, categories) {

    filterBy.rank = $scope.ranks[0];

    $scope.categories = categories.query(function() {
      $scope.categories.unshift( { name: 'All' } );
      filterBy.category = $scope.categories[0];
    });

});