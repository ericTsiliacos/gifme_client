describe('SearchController', function () {
    var scope,
        $httpBackend,
        successCallback,
        errorCallback,
        controller;

    beforeEach(module('gifMe.controllers'));

    describe('searching for a gif', function () {
        beforeEach(inject(function ($rootScope, $controller, _$httpBackend_) {
            scope = $rootScope.$new();
            controller = $controller('SearchController', {
                '$scope': scope
            });
            successCallback = jasmine.createSpy();
            errorCallback = jasmine.createSpy();
            $httpBackend = _$httpBackend_;

            scope.term = "kittens";
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('fetches a gif from the api with the specified term', function () {
            var expectedUrl = 'http://localhost:5000/search.json?term=kittens';

            $httpBackend.expectGET(expectedUrl).respond({}, 200);

            scope.search();

            $httpBackend.flush();
            expect(true).toEqual(true);
        });
    });
});
