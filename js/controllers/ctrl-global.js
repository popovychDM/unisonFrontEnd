ngapp.controller('globalController', function($scope, $route, $routeParams, $location) {
	$scope.$location = $location;
	$scope.$route = $route;
	$scope.$routeParms = $routeParams;
	
	$scope.navigate = function(url) {
		$location.path(url);
	};
});