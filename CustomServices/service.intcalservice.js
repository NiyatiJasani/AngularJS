angular.module('main')
    .factory('interestCalculateService', ['$log', function ($log) {
        $log.log('Inside Service')
        var obj = {};
        obj.calc = function (p, n, r) {
            $log.log('Inside Calc');
            return p * n * r / 100;
        }
        return obj;


}]);