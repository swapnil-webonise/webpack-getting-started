import angular from 'angular'

angular.module('MyApp').controller('about', ['$scope',
    function($scope) {

        $scope.heading = 'Angular with webpack';
        $scope.title = 'About';
    }
]);