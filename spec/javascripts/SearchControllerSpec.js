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

        describe('when fetching a gif from the api with the specified term succeeds', function () {
            it("attaches the gifurl to the scope", function () {
                var expectedUrl = 'http://localhost:5000/search.json?term=kittens';
                var responseData = {url: "http://media0.giphy.com/media/PMausUvoqOgAU/200_d.gif"};
                $httpBackend.expectGET(expectedUrl).respond(responseData, 200);

                scope.search();

                $httpBackend.flush();
                expect(scope.gifUrl).toEqual("http://media0.giphy.com/media/PMausUvoqOgAU/200_d.gif");
            });
        });
    });
});
