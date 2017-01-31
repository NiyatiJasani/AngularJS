angular.module('main')
    .controller('ControllerB', ['$scope', 'interestCalculateService', '$log', function ($scope, interestCalculateService, $log) {
        //        interestCalculateService.calc(9000, 6, 2);
        //        $log.log(interestCalculateService.calc(9000, 6, 2));

        var r = 4;
        var p = 5000;
        var n = 2;

        $scope.resultB = interestCalculateService.calc(p, n, r);
        console.log($scope.resultB);
    }]);