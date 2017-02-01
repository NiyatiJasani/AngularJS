angular.module('main')
    .controller("myCtrl", ['$scope', '$log', function ($scope, $log) {
        $scope.showData = function () {
            $scope.student = {
                "RollNo": "101",
                "Name": "Harry",
                "image": "flower.jpg"
            };
        }

        $log.log("Inside block");
}]);