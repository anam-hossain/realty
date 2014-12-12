'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {

  beforeEach(module('realtyFilters'));


  describe('ucfirst', function() {

    it('should convert first character uppercase for a string',
      inject(function(ucfirstFilter) {
      expect(ucfirstFilter("realty")).toBe('Realty');
    }));
  });

  describe('strLimit', function() {

    it('should limit string at given length and end with three dot(...)',
      inject(function(strLimitFilter) {
      var string = "Welcome to Realty for renting houses or appartments";
      var length = 17;

      expect(strLimitFilter(string, length)).toBe('Welcome to Realty...');
    }));
  });
});