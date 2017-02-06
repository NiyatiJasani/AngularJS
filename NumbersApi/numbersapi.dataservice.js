 angular.module('main').factory('dataService', ['$http', '$log', function ($http, $log) {
     $log.log("Inside service");

     var obj = {};
     obj.getData = function (no, f1, f2) {
         var url = "http://numbersapi.com/" + no;
         $log.log(url);


         $http.get(url)
             .success(function (data) {
                 f1(data);
             }).error(function (errorData) {
                 f2(errorData);
             })

     }

     return obj;

             }]);