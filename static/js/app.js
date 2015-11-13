'use strict';

var gifMe = angular.module('gifMe', [
    'ngRoute',
    'gifMe.controllers'
]);

gifMe.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '/static/partials/search.html',
            controller: 'SearchController'
        })
    }]);
