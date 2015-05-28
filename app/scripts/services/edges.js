'use strict';

angular.module('swFrontendApp').service('edges', function() {
  this.query = function() {
    return [
      {
        name: 'Atrractive',
        description: 'blah...',
        category: {
          name: 'Background'
        },
        requirements: [
          { name: null, value: 'Novice' },
          { name: 'Vigor', value: 'd6'}
        ]
      },
      {
        name: 'Atrractive',
        description: 'blah...',
        category: {
          name: 'Background'
        },
        requirements: [
          { name: null, value: 'Novice' },
          { name: 'Vigor', value: 'd6'}
        ]
      }
    ];
  };
});