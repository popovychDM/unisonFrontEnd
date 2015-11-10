/**
 * Created by Shuriken on 24.10.2015.
 */

appDirectives.directive('fastMenu', function ($compile, ajaxSvc, extDataUrls) {

    var url = extDataUrls.fastMenu;

    function link(scope, element, attrs) {

                ajaxSvc.getData(url)

                    .then(function (response) {
                        scope.fastMenuData = response.data;
                        console.log('Fast menu data obj:', scope.fastMenuData);
                    },
                    function (response) {
                        console.log('Some error happened: ', response);
                    })

                    .then(function () {
                        //element.html(template).show();

                        setTimeout(function () {

                            // NO JQUERY CODE INCLUDED RIGHT NOW

                        }, 1);

                        //$compile(element.contents())(scope);
                    });
    }

    return {
        restrict: 'A',
        link: link,
        replace: true,
        templateUrl: "js/partials/dir-tmpl/fast-menu-tmpl.html"
    }
});

