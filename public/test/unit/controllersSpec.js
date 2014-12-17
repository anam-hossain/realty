'use strict';

/* jasmine specs for controllers go here */
describe('Realty controllers', function() {

  beforeEach(module('realtyApp'));
  beforeEach(module('angularUtils.directives.dirPagination'));
  beforeEach(module('realtyFilters'));
  beforeEach(module('realtyServices'));

  function propertiesData() {
    return {
      list : function() {
        return {
          "total": 1,
          "data":[{
             "id": "26",
          "property_type": "apartment",
          "amount": "600",
          "address": "26 Marsh St, Wolli Creek"
          }],
          "photos": [{
            "id": "79",
            "property_id": "20",
            "name": "1",
            "location": "local",
            "created_at": "2014-11-30 01:46:46",
            "updated_at": "2014-11-30 01:46:46"
          }]
        };
      },
      details: function() {
        return {
            "id": "26",
            "property_type": "apartment",
            "amount": "600",
            "address": "26 Marsh St, Wolli Creek",
            "description": "Fully Furnished 2 Bedroom Apartment",
            "beds": "1",
            "bathrooms": "1",
            "car_spaces": "2",
            "smoking_allowed": "1",
            "pets_allowed": "0",
            "available_at": "2014-12-30",
            "deleted_at": null,
            "created_at": "2014-12-03 07:19:53",
            "updated_at": "2014-12-03 07:19:53",
            "photos": [
                {
                    "id": "88",
                    "property_id": "26",
                    "name": "2",
                    "location": "local",
                    "created_at": "2014-12-03 07:19:53",
                    "updated_at": "2014-12-03 07:19:53"
                }
            ]
        }
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

  // Test Specs for PropertyListctrl
  describe('PropertyListCtrl', function() {
    var scope, ctrl, $httpBackend, $controller;

    // Learn more about dependency injection for testing
    // https://docs.angularjs.org/tutorial/step_05
    beforeEach(inject(function(_$httpBackend_, $rootScope, _$controller_) {
      $controller = _$controller_;
      $httpBackend = _$httpBackend_;

      scope = $rootScope.$new();
      ctrl = $controller('PropertyListCtrl', {$scope: scope});
      $httpBackend.whenGET('/api/properties?page=1').
          respond(propertiesData().list());
    }));


    it('should create "proterties" model with 1 property fetched from xhr', function() {
      scope.getResultsPage(1);
      $httpBackend.flush();
      expect(scope.properties).toEqual(propertiesData().list().data);
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

  
  // Test Specs for PropertyDetailCtrl
  
  // Test Specs for PropertyListctrl
  describe('PropertyDetailCtrl specs', function() {
    var scope, ctrl, $httpBackend, $controller;

    beforeEach(inject(function(_$httpBackend_, $rootScope, _$controller_, $routeParams) {
      $controller = _$controller_;
      $httpBackend = _$httpBackend_;

      $httpBackend.expectGET('/api/properties/26').respond(propertiesData().details());
      $routeParams.propertyId = 26;
      // console.log(propertiesData().details());
      scope = $rootScope.$new();
      ctrl = $controller('PropertyDetailCtrl', {$scope: scope});
    }));


    it('should create property model with the fetched data from xhr', function() {
      $httpBackend.flush();
      expect(scope.property.id).toEqual(propertiesData().details().id);
    });

    it('should set main image url', function() {
      $httpBackend.flush();
      expect(scope.mainImageUrl).toEqual('images/2.jpg');
    });
  });
});