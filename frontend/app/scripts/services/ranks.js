'use strict';

angular.module('swFrontendApp').service('ranks', function() {
  this.query = function() {
    return [
      { name: 'All' },
      { name: 'Novice' },
      { name: 'Seasoned' }
    ];
  };
});