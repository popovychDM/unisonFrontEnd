/**
 * Created by Shuriken on 19.10.2015.
 */
ngApp.directive('productsFilters', function ($compile, ajaxSvc) {

    var url = "http://192.168.50.56:8080/ords/virtualbranch_ws/interface/ProductStructure/1";
    var template;
    var productsObj;
    var topFilterArr = [];
    var secondFilterArr = [];

    function renderProductsFilters(productsObj) {
        console.log('renderProductsFilters:', productsObj);
        for (var i = 0; i < productsObj.items.length; i++) {
            if (topFilterArr.indexOf(productsObj.items[i].prod_type_name) === -1) {
                topFilterArr.push(productsObj.items[i].prod_type_name);
            }
        }
        return topFilterArr;
    }

    function link(scope, element, attrs) {

        ajaxSvc.getData(url)

            .then(function (response) {
                productsObj = response.data;
                scope.topFilterArr = renderProductsFilters(productsObj);
            },
            function (response) {
                console.log('Some error happened: ', response);
            })

            .then(function () {

                console.log(scope.topFilterArr);

                element.html(template).show();

                setTimeout(function () {

                    var elements = $('.main-filter').find('a');
                    $(elements).bind('click', function() {
                        $(elements).removeClass('act');
                        $(this).addClass('act');
                    })

                }, 1);

                $compile(element.contents())(scope);
            });

    }

    return {
        restrict: 'EA',
        link: link,
        replace: true,
        templateUrl :"js/partials/dir-tmpl/products-filters-tmpl.html"
    }
});

