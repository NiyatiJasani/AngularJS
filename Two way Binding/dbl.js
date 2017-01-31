angular.module('bind', [])
    .controller('bindCtrl', ['$scope', function ($scope) {
        $scope.user = {
            "name": 'abc',
            "email": "abc@gmail.com"
        };
    }]);