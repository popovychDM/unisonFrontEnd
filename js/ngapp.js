var ngApp = angular.module('ngApp', [
    //'ngAnimate', // Temporary commented because of bugs with ui-router
    'ui.router',
    'ngCookies',
    'appFilters',
    'appServices',
    'appControllers',
    'appDirectives',
]);

ngApp.run(['$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {

            $rootScope.topcycle = function () {
                if($state.includes('home')) {
                    $state.go('needs');
                } else if ($state.includes('needs')) {
                    $state.go('productsandservices');
                } else if ($state.includes('productsandservices')) {
                    $state.go('home');
                } else {
                    $state.go('home');
                }
            };

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

ngApp.config(['$provide', '$stateProvider', '$urlRouterProvider',
    function($provide, $stateProvider, $urlRouterProvider) {


        // START INJECT SERVICE WITH EXTERNAL DATA URLS //
        $provide.factory('extDataUrls', function() {
            return {
                keyAdvSlide: 'http://192.168.50.56:8080/ords/virtualbranch_ws/interface/KeyAdvantages/1',
                mainSlider: 'http://192.168.50.56:8080/ords/virtualbranch_ws/interface/SliderBlock/1',
                fastMenu: 'http://192.168.50.56:8080/ords/virtualbranch_ws/interface/FastMenu/1',
                productsFilters: 'http://192.168.50.56:8080/ords/virtualbranch_ws/reference/open/ProductStructure/1',
                //orderForm: 'http://192.168.50.56:8080/ords/virtualbranch_ws/reference/open/AnketaQuest/1/1/1'
                orderForm: 'http://192.168.50.56:8080/ords/virtualbranch_ws/reference/open/AnketaQuestTree/1/1/1'
            }
        });
        // END INJECT SERVICE WITH EXTERNAL DATA URLS //



        // ROOTING BLOCK STARTS HERE //
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

            .state('order', {
                url: '/order',
                controller: 'orderCtrl',
                templateUrl: 'js/partials/order-tmpl.html',
                data: { requireLogin: false},
                resolve: {
                    // I will cause a 1 second delay
                    delay: delay
                },
                params: {
                    prod_type_id: null
                }
            })


            .state('maininformsection', {
            url: '/maininformsection',
            templateUrl: 'js/partials/main-inform-section-tmpl.html',
            controller: 'maininfosectionCtrl',
            data: { requireLogin: false},
            resolve: {
                // I will cause a 1 second delay
                delay: delay
            }
        })

            .state('catalognews', {
            url: '/catalognews',
            templateUrl: 'js/partials/catalog-news-tmpl.html',
            controller: 'catalognewsCtrl',
            data: { requireLogin: false},
            resolve: {
                // I will cause a 1 second delay
                delay: delay
            }
        })

            .state('catalogspecialoffers', {
            url: '/catalogspecialoffers',
            templateUrl: 'js/partials/catalog-special-offers-tmpl.html',
            controller: 'catalogspecoffersCtrl',
            data: { requireLogin: false},
            resolve: {
                // I will cause a 1 second delay
                delay: delay
            }
        })

            .state('promocorpcustomers', {
            url: '/promocorpcustomers',
            templateUrl: 'js/partials/promo-corp-customers-tmpl.html',
            controller: 'promocorpcustomersCtrl',
            data: { requireLogin: false},
            resolve: {
                // I will cause a 1 second delay
                delay: delay
            }
        })

            .state('contacts', {
            url: '/contacts',
            templateUrl: 'js/partials/contacts-tmpl.html',
            controller: 'contactsCtrl',
            data: { requireLogin: false},
            resolve: {
                // I will cause a 1 second delay
                delay: delay
            }
        })

            .state('news', {
            url: '/news',
            templateUrl: 'js/partials/news-tmpl.html',
            controller: 'newsCtrl',
            data: { requireLogin: false},
            resolve: {
                // I will cause a 1 second delay
                delay: delay
            }
        })

            .state('specialoffer', {
            url: '/specialoffer',
            templateUrl: 'js/partials/special-offer-tmpl.html',
            controller: 'specialofferCtrl',
            data: { requireLogin: false},
            resolve: {
                // I will cause a 1 second delay
                delay: delay
            }
        })

            .state('catalognotifications', {
            url: '/catalognotifications',
            templateUrl: 'js/partials/catalog-notifications-tmpl.html',
            controller: 'catalognotificationsCtrl',
            data: { requireLogin: false},
            resolve: {
                // I will cause a 1 second delay
                delay: delay
            }
        })

            .state('userprofile', {
            url: '/userprofile',
            templateUrl: 'js/partials/user-profile-tmpl.html',
            controller: 'userprofileCtrl',
            data: { requireLogin: false},
            resolve: {
                // I will cause a 1 second delay
                delay: delay
            }
        })

            .state('catalogrequests', {
            url: '/catalogrequests',
            templateUrl: 'js/partials/catalog-requests-tmpl.html',
            controller: 'catalogrequestsCtrl',
            data: { requireLogin: false},
            resolve: {
                // I will cause a 1 second delay
                delay: delay
            }
        })

            .state('faq', {
            url: '/faq',
            templateUrl: 'js/partials/faq-tmpl.html',
            controller: 'faqCtrl',
            data: { requireLogin: false},
            resolve: {
                // I will cause a 1 second delay
                delay: delay
            }
        })

            .state('product', {
            url: '/product',
            templateUrl: 'js/partials/product-tmpl.html',
            controller: 'productCtrl',
            data: { requireLogin: false},
            resolve: {
                // I will cause a 1 second delay
                delay: delay
            }
        })

            .state('productcredit', {
            url: '/productcredit',
            templateUrl: 'js/partials/product-credit-tmpl.html',
            controller: 'productcreditCtrl',
            data: { requireLogin: false},
            resolve: {
                // I will cause a 1 second delay
                delay: delay
            }
        })

            .state('needs', {
            url: '/needs',
            templateUrl: 'js/partials/needs-tmpl.html',
            controller: 'needsCtrl',
            data: { requireLogin: false},
            resolve: {
                // I will cause a 1 second delay
                delay: delay
            }
        })

            .state('departmentsmap', {
            url: '/departmentsmap',
            templateUrl: 'js/partials/departments-map-tmpl.html',
            controller: 'departmentsmapCtrl',
            data: { requireLogin: false},
            resolve: {
                // I will cause a 1 second delay
                delay: delay
            }
        })

            .state('departmentsmaplist', {
            url: '/departmentsmaplist',
            templateUrl: 'js/partials/departments-map-list-tmpl.html',
            controller: 'departmentsmaplistCtrl',
            data: { requireLogin: false},
            resolve: {
                // I will cause a 1 second delay
                delay: delay
            }
        })

        // ROOTING BLOCK ENDS HERE //

    }]);