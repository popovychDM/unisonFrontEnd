var appControllers = angular.module('appControllers', []);

appControllers.controller('globalController', ['$scope', '$state', function($scope, $state) {

    $scope.$state = $state;

    $scope.navigate = function(stateName) {
        $state.go(stateName);
    };

    // Круговые переходы по нужным страницам при последовательном нажании на логотип вверху

    $scope.topcycle = function () {
        if($state.includes('^')) {
            $state.go('needs');
        }
        if ($state.includes('needs')) {
            $state.go('products');
        }
        if ($state.includes('products')) {
            $state.go('home');
        }
    };


/*
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

    */
}]);

appControllers.controller('homepageCtrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('prodsnsrvcsCtrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('productsCtrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('prodscreditCtrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('safeRentCtrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);


appControllers.controller('maininfosectionCtrl', ['$scope',
    //    appControllers.controller('maininfosection-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('catalognewsCtrl', ['$scope',
//    appControllers.controller('catalognews-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('catalogspecoffersCtrl', ['$scope',
//    appControllers.controller('catalogspecoffers-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('contactsCtrl', ['$scope',
//    appControllers.controller('contacts-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('promocorpcustomersCtrl', ['$scope',
//    appControllers.controller('promocorpcustomers-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('newsCtrl', ['$scope',
//    appControllers.controller('news-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('specialofferCtrl', ['$scope',
//    appControllers.controller('specialoffer-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('catalognotificationsCtrl', ['$scope',
//    appControllers.controller('catalognotifications-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('userprofileCtrl', ['$scope',
//    appControllers.controller('userprofile-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('catalogrequestsCtrl', ['$scope',
//    appControllers.controller('catalogrequests-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('faqCtrl', ['$scope',
//    appControllers.controller('faq-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('productCtrl', ['$scope',
//    appControllers.controller('product-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('productcreditCtrl', ['$scope',
//    appControllers.controller('productcredit-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('orderCtrl', ['$scope',
//    appControllers.controller('order-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('needsCtrl', ['$scope',
//    appControllers.controller('needs-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('departmentsmapCtrl', ['$scope',
//    appControllers.controller('departmentsmap-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('departmentsmaplistCtrl', ['$scope',
//    appControllers.controller('departmentsmaplist-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);

appControllers.controller('productscreditCtrl', ['$scope',
//    appControllers.controller('productscredit-ctrl', ['$scope',
    function ($scope) {
        //Do nothing right now
    }]);






appControllers.controller('orderCtrl', ['$scope', '$state', '$stateParams', 'ajaxSvc',
    function ($scope, $state, $stateParams, ajaxSvc ) {
        $scope.$stateParams = $stateParams;
        console.log('State params:', $scope.$stateParams);
    }]);




