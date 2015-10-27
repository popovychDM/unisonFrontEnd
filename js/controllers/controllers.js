var appControllers = angular.module('appControllers', []);

appControllers.controller('globalController', ['$scope', '$state', function($scope, $state) {
    $scope.$state = $state;

    $scope.navigate = function(stateName) {
        $state.go(stateName);
    };

    //Круговые переходы по нужным страницам при последовательном нажании на логотип вверху
    $scope.topcycle = function() {
        if($location.path() === '/') {
            $location.path('/needs');
        } else if ($location.path() === '/needs'){
            $location.path('/products');
        } else if ($location.path() === '/products'){
            $location.path('/');
        } else {
            $location.path('/');
        }
    };
}]);

appControllers.controller('homepageCtrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('prodsnsrvcsCtrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('prodsCtrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('prodscredit-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('safeRentCtrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('maininfosection-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('catalognews-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('catalogspecoffers-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('contacts-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('promocorpcustomers-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('news-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('specialoffer-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('catalognotifications-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('userprofile-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('catalogrequests-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('faq-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('product-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('productcredit-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('order-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('needs-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('departmentsmap-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('departmentsmaplist-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);


