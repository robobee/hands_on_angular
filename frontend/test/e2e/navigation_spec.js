'use strict';

describe('Navigation Menu', function() {

  it('changes active link depending on route', function() {
    browser.get('/');
    var activeListItem = element(by.css('.active')).getText().then(function(name) {
      expect(name).toBe('Home');
    });

    var edgesLink = element(by.linkText('Edges'));
    edgesLink.click();
    activeListItem = element(by.css('.active')).getText().then(function(name) {
      expect(name).toBe('Edges');
    });

  });

});