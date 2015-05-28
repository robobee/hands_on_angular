'use strict';

angular.module('swFrontendApp').service('edges', function() {
  this.query = function() {
    return [
      {
        name: 'Attrractive',
        description: 'blah...',
        category: {
          name: 'Background'
        },
        requirements: [
          { name: null, value: 'Novice', mode: 'rank' },
          { name: 'Vigor', value: 'd6', mode: 'trait' }
        ]
      },
      {
        name: 'Attrractive',
        description: 'blah...',
        category: {
          name: 'Background'
        },
        requirements: [
          { name: null, value: 'Novice', mode: 'rank' },
          { name: 'Vigor', value: 'd6', mode: 'trait' }
        ]
      },
      {
        name: 'Brawler',
        description: 'description',
        category: {
          name: 'Combat'
        },
        requirements: [
          { name: null, value: 'Seasoned', mode: 'rank' },
          { name: 'Strength', value: 'd8', mode: 'trait' }
        ]
      }
    ];
  };
});