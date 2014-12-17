'use strict';

/* jasmine specs for controllers go here */
describe('Realty controllers', function() {

  beforeEach(module('realtyApp'));
  beforeEach(module('angularUtils.directives.dirPagination'));
  beforeEach(module('realtyFilters'));
  beforeEach(module('realtyServices'));


  describe('PropertyListCtrl', function(){
    var scope, ctrl, $httpBackend, $controller;

    var beds = [
        { value: "1", number: "1" },
        { value: "2", number: "2" },
        { value: "3", number: "3" },
        { value: "4", number: "4" },
        { value: "5", number: "5" },
        { value: "6", number: "6" },
        { value: "7", number: "7" },
        { value: "8", number: "8" },
        { value: "9", number: "9" },
        { value: "10", number: "10" }
      ]

    function propertiesData() {
      return {
        details : function() {
          return {
            "total": 1,
            "data":[{
               "id": "26",
            "property_type": "apartment",
            "amount": "600",
            "address": "26 Marsh St, Wolli Creek"
            }]
          };
        },
        propertyTypes: function() {
          return [
            { value: 'unit', name: 'Unit' },
            { value: 'house', name: 'House' },
            { value: 'apartment', name: 'Apartment' },
          ];
        },
        beds: function() { 
          return [
            { value: "1", number: "1" },
            { value: "2", number: "2" },
            { value: "3", number: "3" },
            { value: "4", number: "4" },
            { value: "5", number: "5" },
            { value: "6", number: "6" },
            { value: "7", number: "7" },
            { value: "8", number: "8" },
            { value: "9", number: "9" },
            { value: "10", number: "10" }
          ];
        },
        bathrooms: function() {
          return [
            { value: "1", number: "1" },
            { value: "2", number: "2" },
            { value: "3", number: "3" },
            { value: "4", number: "4" },
            { value: "5", number: "5" }
          ];
        },
        garageSpaces: function() {
          return [
            { value: "1", number: "1" },
            { value: "2", number: "2" },
            { value: "3", number: "3" },
            { value: "4", number: "4" },
            { value: "5", number: "5" }
          ];
        }
      }
    };

    // Learn more about dependency injection for testing
    // https://docs.angularjs.org/tutorial/step_05
    beforeEach(inject(function(_$httpBackend_, $rootScope, _$controller_) {
      $controller = _$controller_;
      $httpBackend = _$httpBackend_;

      scope = $rootScope.$new();
      ctrl = $controller('PropertyListCtrl', {$scope: scope});
      $httpBackend.whenGET('/api/properties?page=1').
          respond(propertiesData().details());
    }));


    it('should create "proterties" model with 1 property fetched from xhr', function() {
      scope.getResultsPage(1);
      $httpBackend.flush();
      expect(scope.properties).toEqual(propertiesData().details().data);
    });

    it('should populate beds model from service propertyData', function() {
      expect(scope.beds).toEqual(propertiesData().beds());
    });

    it('should populate bathrooms model from service propertyData', function() {
      expect(scope.bathrooms).toEqual(propertiesData().bathrooms());
    });

    it('should populate garageSpaces model from service propertyData', function() {
      expect(scope.garageSpaces).toEqual(propertiesData().garageSpaces());
    });

    it('should check car space available or not', function() {
      expect(scope.isCarSpaceAvailable(0)).toBe(false);
      expect(scope.isCarSpaceAvailable(1)).toBe(true);
    });
  });
});