import angular from 'angular'
require('angular-ui-router')

angular.module('MyApp').config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/about");

  $stateProvider
    .state('about', {
      url: "/about",
      templateUrl: require('../../partials/about.html')
    })
    .state('contact', {
      url: "/contact",
      templateUrl: require('../../partials/contact.html')
    });
});