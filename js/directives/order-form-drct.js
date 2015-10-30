/**
 * Created by Shuriken on 29.10.2015.
 */

appDirectives.directive('orderForm', function ($compile, ajaxSvc) {

    var url = 'http://192.168.50.56:8080/ords/virtualbranch_ws/reference/open/AnketaQuest/1/1/1';



    var orderForm = {
        input_text : '<div class="form-field"><input type="text" placeholder="Прізвище" value="Сноу"></div>'
    };



    function link(scope, element, attrs) {

        ajaxSvc.getData(url)

            .then(function (response) {
                scope.formFields = response.data;
                console.log('formFields:',  scope.formFields);
            },
            function (response) {
                console.log('Some error happened: ', response);
            })

            .then(function () {

                setTimeout(function () {

                    var user_info_container = $('.user-info').find('.left-side');
                    var field;

                    for (var i = 0; i < scope.formFields.items.length; i++ ) {
                        field = '<div class="form-field"><input type="text" placeholder="' + scope.formFields.items[i].name + '" value=""></div>';
                        $(user_info_container).append(field);
                    }


                    // This code is called from Tiomeout function, because it needs the
                    // template to be drawn in DOM to fine topElements in it

                }, 1);

            });

    }

    return {
        restrict: 'A',
        link: link,
        replace: true,
        templateUrl :"js/partials/dir-tmpl/order-form-tmpl.html"
    }
});