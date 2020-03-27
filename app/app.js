'use strict';

// Declare app level module which depends on views, and core components
// angular.module('myApp', [
//   'ngRoute'
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');
//   $routeProvider.when('/', {
//     templateUrl: 'todoCalendar/todoCalendar.html',
//     controller: 'todoCtrl'
//   });
//   $routeProvider.otherwise({redirectTo: '/todoCalendar'});
// }]);

var app = angular.module('myApp', ['ngRoute','ui.calendar', 'ui.bootstrap']);
app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.when('/', {
    templateUrl: 'todoCalendar/todoCalendar.view.html',
    controller: 'todoCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/todoCalendar'});
}]);

// app.config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/', {
//     templateUrl: 'todoCalendar/todoCalendar.html',
//     controller: 'todoCtrl'
//   });
// }])
