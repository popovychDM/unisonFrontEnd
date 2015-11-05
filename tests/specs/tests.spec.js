/**
 * Created by Shuriken on 02.11.2015.
 */

describe('Test modules', function() {

    describe('Test services modules', function() {
        var ajaxSvc, cookiesSvc;

        beforeEach(module('ngApp'));
        beforeEach(angular.mock.inject(function ($injector) {
            ajaxSvc = $injector.get('ajaxSvc');
            cookiesSvc = $injector.get('cookiesSvc');
        }));

        it("test ajaxSvc to be true", function() {
            expect(ajaxSvc).toBeTruthy();
        });

        it("test cookiesSvc to be true", function() {
            expect(cookiesSvc).toBeTruthy();
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


//describe('Test sample http service', function () {
//    var testHttpService,http;
//    beforeEach(function() {
//        module('ngApp');
//        inject(function ($injector) {
//            testHttpService = $injector.get('testHttpService');
//            testUrl = 'http://192.168.50.56:8080/ords/virtualbranch_ws/reference/open/ProductStructure/1';
//            http = $injector.get('$httpBackend');
//        });
//    });
//
//    it('should call the backend testurl ', function () {
//        testHttpService.testFunction();
//        http.expectGET(testUrl).respond();
//        http.flush();
//    });
//});

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