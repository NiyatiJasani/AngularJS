angular.module('main')
    .controller('ControllerA', ['$scope', 'interestCalculateService', '$log', function ($scope, interestCalculateService, $log) {
            var r = 7;
            var p = 1000;
            var n = 2;

            $scope.resultA = interestCalculateService.calc(p, n, r);
            console.log($scope.resultA);

            }
    ]);

/*Note
              $scope.calculate = function () {
                            interestCalculateService.calc();
                            $log.log(interestCalculateService.calc());