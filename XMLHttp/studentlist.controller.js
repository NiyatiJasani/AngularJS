 var app = angular.module('myApp', []);

 app.controller("myCtrl", function ($scope, $http) {
     $scope.click = function () {
         $http({
             method: "GET",
             url: "http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students"
         }).then(function mySucces(response) {
             $scope.students = response.data;
         }, function myError(response) {
             $scope.students = response.statusText;
         });

     }

     $scope.addClick = function () {
             $http.post("http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students", {
                     "rollNo": $scope.rollNo,
                     "name": $scope.name,
                     "email": $scope.email,
                     "date": $scope.date,
                     "age": $scope.age,
                     "isMale": $scope.isMale
                 }),

                 function (response, status) {
                     alert("*-Recieves Data + \n response: " + response + "\n\status: " + status);
                 }

             //             function myError(response) {
             //                 $scope.students = response.statusText;
             //             };

         }
         ////     $scope.younger = function () {
         //           //         
         //           //    
         //           ////         console.log("50");
         //           ////         if ($scope.value >= ) {
         //           ////             $scope.highlight = {
         //           ////                 backgroundcolor: 'white'
         //           //             }
         //         }
         //     }




 });