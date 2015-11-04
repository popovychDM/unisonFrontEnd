/**
 * Created by Shuriken on 24.10.2015.
 */

appDirectives.directive('bigMenu', function ($compile, ajaxSvc) {

    // var url = "http://192.168.50.56:8080/ords/virtualbranch_ws/interface/FastMenu/1";
    var templateUrl = "js/partials/dir-tmpl/big-menu-tmpl.html";
    var template;


    function link(scope, element, attrs) {

        ajaxSvc.getData(templateUrl)

            .then(function (response) {
                template = response.data;
            })

                .then(function () {
                    element.html(template).show();

                    setTimeout(function () {

                        $('.menu-btn').click(function(e) {
                            e.preventDefault();
                            $('.big-menu').show();
                        });
                        $('.close-big-menu').click(function(e) {
                            e.preventDefault();
                            $('.big-menu').hide();
                        });

                    }, 1);

                    $compile(element.contents())(scope);
                });
            };

    return {
        restrict: 'A',
        link: link,
        replace: true
    }
});


