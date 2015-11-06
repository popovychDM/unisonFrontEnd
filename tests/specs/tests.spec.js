/**
 * Created by Shuriken on 02.11.2015.
 */

describe('Test modules', function() {

    describe('Test services modules', function() {
        var ajaxSvc, cookiesSvc, extDataUrls;

        beforeEach(module('ngApp'));
        beforeEach(angular.mock.inject(function ($injector) {
            ajaxSvc = $injector.get('ajaxSvc');
            cookiesSvc = $injector.get('cookiesSvc');
            extDataUrls = $injector.get('extDataUrls');
        }));

        it("test ajaxSvc to be true", function() {
            expect(ajaxSvc).toBeTruthy();
        });

        it("test cookiesSvc to be true", function() {
            expect(cookiesSvc).toBeTruthy();
        });

        it("test extDataUrls to be true", function() {
            expect(extDataUrls).toBeTruthy();
        });
    });

    describe('Test controllers modules', function() {

        describe('Test homepageCtrl controller', function() {

            var homepageCtrl, scope;

            beforeEach(module('ngApp'));
            beforeEach(angular.mock.inject(function ($rootScope, $controller) {
                // scope = $rootScope.$new();
                homepageCtrl = $controller('homepageCtrl', {
                    $scope: scope
                });
            }));

            it("test homepageCtrl to be true", function () {
                expect(homepageCtrl).toBeTruthy();
            });
        });
    });
});

describe('Test functions', function() {

    describe('Test ajaxSvc to send request to extDataUrls.orderForm', function() {
        var ajaxSvc, extDataUrls, $httpBackend, ajaxObj;

        beforeEach(module('ngApp'));
        beforeEach(angular.mock.inject(function ($injector) {
            ajaxSvc = $injector.get('ajaxSvc');
            extDataUrls = $injector.get('extDataUrls');
            $httpBackend = $injector.get('$httpBackend');
        }));

        it("test ajaxSvc to be get response from $httpBackend", function() {
            $httpBackend.when('GET', extDataUrls.orderForm).respond({fields: 'we have some fields'});
            ajaxSvc.getData(extDataUrls.orderForm).then(function(response) {
                ajaxObj = response.data;
            });
            $httpBackend.flush();
            expect(ajaxObj.fields).toBe('we have some fields');
        });
    });
});

describe('Test ui-route functions', function() {

    describe('Test that state "productsandservices" exists', function() {

        var $rootScope, $state, state = 'productsandservices';

        beforeEach(module('ngApp'));

        beforeEach(angular.mock.inject(function ($injector) {
                $rootScope = $injector.get('$rootScope');
                $state = $injector.get('$state');
            }));

        it('should respond to URL', function() {
            expect($state.href(state)).toEqual('#/productsandservices');
        });
    });
});

//describe('example test', function() {
//    it('should be true', function() {
//        expect('foo').toBe('foo');
//    });
//});

//describe('MyAppService', function () {
//    beforeEach(module('ngApp'));
//    describe("userprofileCtrl", function() {
//
//        var scope;
//        beforeEach(inject(function($rootScope, $controller) {
//            scope = $rootScope.$new();
//            $controller("userprofileCtrl", {
//                $scope: scope
//            });
//        }));
//
//        it("test products http request", function() {
//            expect(scope.helloMessage).toBe('Hello Userprofile');
//        });
//    });
//});