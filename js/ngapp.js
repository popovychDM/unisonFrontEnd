var ngApp = angular.module('ngApp', [
    'ngResource',
    'ui.router',
    'appControllers',
    'customFilters'
]);

ngApp.run(['$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {

            // It's very handy to add references to $state and $stateParams to the $rootScope
            // so that you can access them from any scope within your applications.For example,
            // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
            // to active whenever 'contacts.list' or one of its decendents is active.
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
                //console.log('event:', event);
                //console.log('toState:', toState);
                //console.log('toParams:', toParams);
                //console.log('fromState:', fromState);
                //console.log('fromParams:', fromParams);

                if (toState.data.requireLogin === true) {
                    event.preventDefault();
                    console.log('THIS SECTION REQUIRES LOGIN');
                } else {
                    console.log('NO LOGIN REQUIRED ON THIS PAGE');
                }
            });
            $rootScope.username = 'TEMPORARY USERNAME';
        }
    ]);

ngApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        var delay = function($q, $timeout) {
            var delay = $q.defer();
            $timeout(delay.resolve, 1000);
            $('.close-big-menu').trigger('click'); //TODO: FIND THE WAY TO CLOSE BIG MENU AUTOMATICALY
            return delay.promise;
        };

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'homepageCtrl',
                templateUrl: 'js/partials/front-page-tmpl.html',
                data: { requireLogin: false},
                resolve: {
                    // I will cause a 1 second delay
                    delay: delay
                }
            })

            .state('productsandservices', {
                url: '/productsandservices',
                controller: 'prodsnsrvcsCtrl',
                templateUrl: 'js/partials/products-and-services-tmpl.html',
                data: { requireLogin: false},
                resolve: {
                    // I will cause a 1 second delay
                    delay: delay
                }
            })

            .state('productscredit', {
                url: '/productscredit',
                controller: 'productscreditCtrl',
                templateUrl: 'js/partials/products-credit-tmpl.html',
                data: { requireLogin: false},
                resolve: {
                    // I will cause a 1 second delay
                    delay: delay
                }
            })

            .state('products', {
                url: '/products',
                controller: 'productsCtrl',
                templateUrl: 'js/partials/products-tmpl.html',
                data: { requireLogin: false},
                resolve: {
                    // I will cause a 1 second delay
                    delay: delay
                }
            })

            .state('safe-rent', {
                url: '/safe-rent',
                controller: 'safeRentCtrl',
                templateUrl: 'js/partials/safe-rent-tmpl.html',
                data: { requireLogin: false},
                resolve: {
                    // I will cause a 1 second delay
                    delay: delay
                }
            })

    }]);