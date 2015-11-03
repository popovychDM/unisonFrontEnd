/**
 * Created by Shuriken on 02.11.2015.
 */

(function () {
    appServices.service('testHttpService', testHttpService);
    testHttpService.$inject = ['$http'];

    function testHttpService($http) {

        var testUrl = 'http://192.168.50.56:8080/ords/virtualbranch_ws/reference/open/ProductStructure/1';

        var service = {
            testFunction: testFunction
        };

        return service;

        function testFunction() {
            /*testurl is my backend API*/
            return $http.get(testUrl)
                .error(function(){
                    return;
                })
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();