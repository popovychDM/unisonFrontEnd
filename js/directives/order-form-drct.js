/**
 * Created by Shuriken on 29.10.2015.
 */

appDirectives.directive('orderForm', [
    'formConstructSvc',
    'extDataUrls',
    'ajaxSvc',

    function (formConstructSvc, extDataUrls, ajaxSvc) {

    var url = extDataUrls.orderForm;
    var formObj;

    function link(scope, element, attrs) {

        ajaxSvc.getData(url)

            .then(function (response) {
                scope.formFields = response.data;
                formObj = formConstructSvc.formConstruct(scope.formFields);
                element.append(formObj);
            },
            function (response) {
                console.log('Some error happened: ', response);
            });
    }

    return {
        restrict: 'A',
        link: link,
        replace: false,
        template: '<div class="order-form-container"></div>'
    }
}]);