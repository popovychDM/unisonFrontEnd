/**
 * Created by Shuriken on 02.11.2015.
 */

(function () {
    appServices.service('MyAppService', MyAppService);
    MyAppService.$inject = ['$http', 'testUrl'];
    function MyAppService($http, testUrl) {
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