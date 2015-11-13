var gifMe = angular.module('gifMe.controllers', []);

gifMe.controller('SearchController', ['$scope', '$http', function($scope, $http) {
    $scope.search = function() {
        $http({
            method: 'GET',
            url: 'http://localhost:5000/search.json',
            headers: {
                'Accept-Language': 'en'
            },
            params: {
                term: $scope.term
            }
        }).success(function(response) {
            $scope.gifUrl = response.url;
        })
    };
}]);

