/**
 * Created by Shuriken on 04.11.2015.
 */

// Shows language icon checkbox

appDirectives.directive('headerLangBtn', ['cookiesSvc', function (cookiesSvc) {

    function langPrefCtrl($scope) {

        function setCurrentLangPref() {
            var currentCookiesObj = cookiesSvc.getAllCookies;
            if (currentCookiesObj.lang_pref && currentCookiesObj.lang_pref !== undefined) {
                console.log('lang_pref is present in cookies:', currentCookiesObj.lang_pref);
                    $scope.lang_pref = 'Hello';
            } else {
                $log.log('Setting cookies');
                cookiesSvc.setCookie('lang_pref', 'ukr');
                $scope.lang_pref = 'ukr';
            }
        }

        setCurrentLangPref();
    }

    function link(scope, element, attrs) {
        //Nothing here right now
    }

    return {
        restrict: 'A',
        // link: link,
        templateUrl: 'js/partials/dir-tmpl/header-lang-btn-tmpl.html',
        replace: true,
        controller: langPrefCtrl
    };
}]);


