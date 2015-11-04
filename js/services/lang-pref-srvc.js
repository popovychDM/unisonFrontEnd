/**
 * Created by Shuriken on 04.11.2015.
 */

(function() {

    appServices.factory('langPref', ['$cookieStore', '$cookies', '$log', function($cookieStore, $cookies, $log) {

        var lang_pref, lang_get;

        //langPref.cookiesObj = getCurrentLangPref();
        $log.log('Current lang_pref:', lang_pref);
        $log.log('Current cookies:', $cookies.getAll());

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
            getLangPref: getCurrentLangPref(),
            langToggle: toggleCurrentLangPref
        }
    }]);

})();
