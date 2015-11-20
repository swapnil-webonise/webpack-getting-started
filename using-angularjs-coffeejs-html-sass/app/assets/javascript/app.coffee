'use strict'
angular.module 'MyApp', []

angular.module('MyApp').controller 'MyAppCtrl', [
  '$scope'
  ($scope) ->
    $scope.heading = 'Angular using coffee script with webpack'
    return
]
