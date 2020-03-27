'use strict';

// Declare app level module which depends on views, and core components

var app = angular.module('myApp', ['ngRoute','ui.calendar', 'ui.bootstrap']);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.when('/', {
    templateUrl: 'todoCalendar/todoCalendar.view.html',
    controller: 'todoCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/todoCalendar'});
}]);

