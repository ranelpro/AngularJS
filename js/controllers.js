
var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController ($scope) {
	$scope.author = {
		'name' : 'Ranel T.',
		'title' : 'Front-End Developer / Graphic Designer',
		'company' : 'DeVore Media'
	}
});