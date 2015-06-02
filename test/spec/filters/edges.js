'use strict';

describe('EdgesFilter', function() {
  var filter, edges, filterBy;

  beforeEach(module('swFrontendApp'));

  beforeEach(inject(function(edgesFilter) {
    filter = edgesFilter;

    edges = [
      {
        requirements: [
          { name: null, value: 'Novice', mode: 'rank' },
          { name: 'Agility', value: 'd6', mode: 'trait' }
        ],
        category: { name: 'first' }
      },
      {
        requirements: [
          { name: null, value: 'Seasoned', mode: 'rank' },
          { name: 'Agility', value: 'd6', mode: 'trait' }
        ],
        category: { name: 'second' }
      }
    ];

    filterBy = { category: { name: 'first' }, rank: { name: 'Novice' } };

  }));

  describe('Category filter', function() {

    it('filters by category name', function() {
      filterBy.rank.name = 'All';
      expect(filter(edges, filterBy).length).toEqual(1);
    });

    it('returns all elements when category filter is All', function() {
      filterBy.rank.name = 'All';
      filterBy.category.name = 'All';
      expect(filter(edges, filterBy).length).toEqual(2);
    });

  });

  describe('Rank filter', function() {

    it('filters by rank', function() {
      filterBy.category.name = 'All';
      expect(filter(edges, filterBy).length).toEqual(1);
    });

    it('returns all elements when rank filter is All', function() {
      filterBy.category.name = 'All';
      filterBy.rank.name = 'All';
      expect(filter(edges, filterBy).length).toEqual(2);
    });

  });
});