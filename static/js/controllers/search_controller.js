var gifMe = angular.module('gifMe.controllers', []);

gifMe.controller('SearchController', ['$scope', '$http', function($scope, $http) {
    $scope.search = function() {
        console.log("inside search function");
        $http({
            method: 'GET',
            url: 'http://localhost:5000/search.json',
            headers: {
                'Accept-Language': 'en'
            },
            params: {
                term: $scope.term
            }
        })
    };
    console.log("inside controller");
}]);

console.log("inside angular code");

