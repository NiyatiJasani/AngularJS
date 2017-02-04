	// create the module and name it
	angular.module('main', ['ngRoute'])

	// configure our routes
	.config(['$routeProvider', function ($routeProvider) {
	    $routeProvider

	    // route for the home page
	        .when('/', {
	        templateUrl: 'partial/home.html',
	        controller: 'HomeCtrl'
	    })

	    // route for the about page
	    .when('/about', {
	        templateUrl: 'partial/about.html',
	        controller: 'aboutController'
	    })

	    // route for the contact page
	    .when('/contact', {
	        templateUrl: 'partial/contact.html',
	        controller: 'contactController'
	    })
	}])

	// create the controller and inject Angular's $scope

	.controller('HomeCtrl', function ($scope) {
	    // create a message to display in our view
	    $scope.message = 'Hello there, welcome!';
	})

	.controller('aboutController', function ($scope) {
	    $scope.message = 'Look! I am an about page.';
	})

	.controller('contactController', function ($scope) {
	    $scope.message = 'Contact us for more details';
	});