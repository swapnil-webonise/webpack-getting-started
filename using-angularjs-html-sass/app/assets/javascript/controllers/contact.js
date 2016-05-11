import angular from 'angular'

angular.module('MyApp').controller('contact', ['$scope',
    function($scope) {

        $scope.heading = 'Angular with webpack';
        $scope.title = 'Contact';
    }
]);