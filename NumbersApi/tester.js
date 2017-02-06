angular.module('main')
    .controller('dataCtrl', ['$scope', 'dataService', '$log', function ($scope, dataService, $log) {
        $scope.val = [];

        //Local Storage 
        var textData = localStorage['texts'];
        if (textData != undefined) {
            $scope.numbersapi = JSON.parse(textData);
        }


        //Append Data Table
        $scope.load = function () {
            console.log("load");

            dataService.getData($scope.value, function (d) {
                    $scope.val.unshift({
                        'data': d
                            //key and value
                            //f1 data
                    })

                    $log.log(d)
                },
                function (d) {
                    $log.log(d);
                });


            localStorage['texts'] = JSON.stringify($scope.numbersapi);
            console.log(localStorage);

            localStorage.setItem('data', JSON.stringify($scope.val));
            console.log(localStorage.getItem('data'));
        };
        $scope.value = " ";
        //        localStorage.clear();
            }]);


angular.module('main')
    .controller('dataCtrl', ['$scope', 'dataService', '$log', function ($scope, dataService, $log) {
        $scope.val = [];

        //Local Storage 
        var textData = localStorage['texts'];
        console.log(textData);
        if (textData != undefined) {
            $scope.val = JSON.parse(textData);
        }


        //Append Data Table
        $scope.load = function () {
            console.log("load");

            dataService.getData($scope.value, function (d) {
                    $scope.val.push({
                        'data': d
                            //key and value
                            //f1 data
                    })

                    $log.log(d)
                },
                function (d) {
                    $log.log(d);
                });


            localStorage['texts'] = JSON.stringify($scope.val);
            console.log(localStorage);

            localStorage.setItem('data', JSON.stringify($scope.val));
            console.log(localStorage.getItem('data'));
        };
        $scope.value = " ";
        //        localStorage.clear();
            }])