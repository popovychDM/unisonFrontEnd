ngApp.factory('ajaxSvc', function($http) {

	return {
			getData: function(url) {
				return $http.get(url);
			}
	}
});