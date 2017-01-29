angular.module('main').controller('displayCtrl', ['$scope', function ($scope) {

    $scope.setStyle = function () {
        $scope.textbox = {
            'background-color': $scope.bgvalue,
            'color': $scope.forevalue,
            'font-family': $scope.fontvalue,
            'font-size': $scope.sizevalue + "px"
        }
    }
}]);