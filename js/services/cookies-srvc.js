/**
 * Created by Shuriken on 04.11.2015.
 */

(function() {

    appServices.factory('cookiesSvc', ['$cookies', function($cookies) {

        function getCookie(key) {
            return $cookies.get(key);
        }

        function getAllCookies() {
            return $cookies.getAll();
        }

        function setCookie(key, value) {
            $cookies.put(key, value);
        }

        return {
            getCookie: getCookie,
            getAllCookies: getAllCookies(),
            setCookie: setCookie
        }
    }]);

})();
