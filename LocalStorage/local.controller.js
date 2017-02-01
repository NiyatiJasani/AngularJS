angular.module('main', []).controller('localstorageCtrl', ['$scope', function ($scope) {


    if (localStorage.getItem('wishData')) {

        alert("Data in localstorage");
    }


    $scope.retrieve = function () {
        $scope.todos = JSON.parse(localStorage.getItem("wishData"));
    }

    $scope.todos = [];
    $scope.wishListner = function () {
        $scope.todos.push({
            'name': $scope.todoText,
        })
    };

    $scope.saveData = function () {

        var dataToStore = JSON.stringify($scope.todos);
        console.log(dataToStore);
        localStorage.setItem('wishData', dataToStore);


    }
    $scope.retrieve();

}]);