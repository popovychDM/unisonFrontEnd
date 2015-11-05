/**
 * Created by Shuriken on 04.11.2015.
 */

// Shows language icon and performs language preferences tasks

(function() {

    appDirectives.directive('headerLangBtn', ['cookiesSvc', function (cookiesSvc) {

        function langPrefCtrl($scope) {
            // Nothing here right now
        }

        function link(scope, element, attrs) {

            $('.lang-btn').bind('click', function() {
                toggleCurrentLangPref();
            });

            function toggleCurrentLangPref() {
                if (cookiesSvc.getCookie('lang_pref') === 'ukr') {
                    cookiesSvc.setCookie('lang_pref', 'rus');
                    scope.$apply(function() {
                        scope.langPref = 'rus';
                    });
                } else {
                    cookiesSvc.setCookie('lang_pref', 'ukr');
                    scope.$apply(function() {
                        scope.langPref = 'ukr';
                    });
                }
            }

            function setCurrentLangPref() {
                var currentCookiesObj = cookiesSvc.getAllCookies;
                if (currentCookiesObj.lang_pref && currentCookiesObj.lang_pref !== undefined) {
                    console.log('Current language in cookies:', currentCookiesObj.lang_pref);
                    scope.langPref = currentCookiesObj.lang_pref;
                } else {
                    console.log('Setting cookies');
                    cookiesSvc.setCookie('langPref', 'ukr');
                    scope.langPref = 'ukr';
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