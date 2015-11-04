/**
 * Created by Shuriken on 04.11.2015.
 */

// Shows language icon checkbox

appDirectives.directive('headerLangBtn', ['langPref', function (langPref) {

    function langPrefCtrl($scope) {

        function getCurrentLang() {
            $scope.langPref = langPref.getLangPref;
            console.log('$scope.langPref: ', $scope.langPref);
        }

        $('.lang-btn').bind('click', function () {
            $scope.$apply(function() {
                langPref.langToggle();
                $scope.langPref = langPref.getLangPref();
            })

        });

        getCurrentLang();
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


