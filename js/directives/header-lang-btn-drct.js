/**
 * Created by Shuriken on 04.11.2015.
 */

// Shows language icon and performs language preferences tasks

(function() {

    appDirectives.directive('headerLangBtn', ['cookiesSvc', 'preferences', function (cookiesSvc, preferences) {

        function langPrefCtrl($scope) {
            // Nothing here right now
        }

        function link(scope, element, attrs) {


            // Updates global value "preferences.lang_pref" stored in myApp.preferences.lang_pref
            function updateLangPreferences() {
                preferences.lang_pref = scope.langPref;
                console.log('preferences.lang_pref:', preferences.lang_pref);
            }

            $('.lang-btn').bind('click', function() {
                toggleCurrentLangPref();
            });

            function toggleCurrentLangPref() {
                if (cookiesSvc.getCookie('lang_pref') === 'ukr') {
                    cookiesSvc.setCookie('lang_pref', 'rus');
                    scope.$apply(function() {
                        scope.langPref = 'rus';
                    });
                    updateLangPreferences();
                } else {
                    cookiesSvc.setCookie('lang_pref', 'ukr');
                    scope.$apply(function() {
                        scope.langPref = 'ukr';
                    });
                    updateLangPreferences();
                }
            }

            function setCurrentLangPref() {
                var currentCookiesObj = cookiesSvc.getAllCookies;
                if (currentCookiesObj.lang_pref && currentCookiesObj.lang_pref !== undefined) {
                    // console.log('Current language in cookies:', currentCookiesObj.lang_pref);
                    scope.langPref = currentCookiesObj.lang_pref;
                    updateLangPreferences()
                } else {
                    // console.log('Setting cookies');
                    cookiesSvc.setCookie('langPref', 'ukr');
                    scope.langPref = 'ukr';
                    updateLangPreferences();
                }
            }

            setCurrentLangPref();
        }

        return {
            restrict: 'A',
            // controller: langPrefCtrl,
            link: link,
            replace: true,
            templateUrl: 'js/partials/dir-tmpl/header-lang-btn-tmpl.html'
        };
    }]);

})();