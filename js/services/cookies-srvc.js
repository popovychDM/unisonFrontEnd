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

        function toggleCurrentLangPref() {
            var curLang;
            if ($cookies.get('lang_pref') === 'ukr') {
                $cookies.put('lang_pref', 'rus');
            } else {
                $cookies.put('lang_pref', 'ukr');
            }
        }

        function getCurrentLangPref() {
            lang_get = $cookies.get('lang_pref');
            console.log('getCurrentLangPref():', lang_get);
            return lang_get;
        }

        function setCurrentLangPref() {
            var currentCookiesObj = $cookies.getAll();
            if (currentCookiesObj.lang_pref && currentCookiesObj.lang_pref !== undefined) {
                console.log('lang_pref is present in cookies:', currentCookiesObj.lang_pref);
                lang_pref = currentCookiesObj.lang_pref;
            } else {
                $log.log('Setting cookies');
                $cookies.put('lang_pref', 'ukr');
                lang_pref = 'UKR';
            }
        }

        setCurrentLangPref();

        return {
            getCookie: getCookie(),
            getAllCookies: getAllCookies(),
            setCookie: setCookie
        }
    }]);

})();
