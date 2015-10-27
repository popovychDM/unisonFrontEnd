/**
 * Created by Shuriken on 24.10.2015.
 */

ngApp.directive('fastMenu', function ($compile, ajaxSvc) {

    var url = "http://192.168.50.56:8080/ords/virtualbranch_ws/interface/FastMenu/1";
    var templateUrl = "js/partials/dir-tmpl/fast-menu-tmpl.html";
    var template;


    function link(scope, element, attrs) {

        ajaxSvc.getData(templateUrl)

            .then(function (response) {
                template = response.data;
            })

            .then(function () {
                ajaxSvc.getData(url)

                    .then(function (response) {
                        scope.fastMenuData = response.data;
                        console.log('Fast menu data obj:', scope.fastMenuData);
                    },
                    function (response) {
                        console.log('Some error happened: ', response);
                    })

                    .then(function () {
                        element.html(template).show();

                        setTimeout(function () {

                            // NO JQUERY CODE INCLUDED RIGHT NOW

                        }, 1);

                        $compile(element.contents())(scope);
                    });
            });
    }

    return {
        restrict: 'E',
        link: link,
        replace: true
    }
});

