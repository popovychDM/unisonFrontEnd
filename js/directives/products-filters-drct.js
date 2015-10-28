/**
 * Created by Shuriken on 19.10.2015.
 */
ngApp.directive('productsFilters', function ($compile, ajaxSvc) {

    //var url1 = "http://192.168.50.56:8080/ords/virtualbranch_ws/reference/open/Product/1";
    var url2 = "http://192.168.50.56:8080/ords/virtualbranch_ws/reference/open/ProductStructure/1";
    var template, products;


    function link(scope, element, attrs) {

        function genTopArray(productsArr) {
            var topArr = [];
            for (var i = 0; i < productsArr.items.length; i++) {
                if (topArr.indexOf(productsArr.items[i].prod_type_name) === -1) {
                    topArr.push(productsArr.items[i].prod_type_name);
                }
            }
            return topArr;
        }

        // Choose all sub-products and return array with them
        function genSubArray(text){
            var subArr = [];
            var prodObj = scope.products.items;
            for (var i = 0; i < prodObj.length; i += 1) {
                if(prodObj[i].prod_type_name === text) {
                    subArr.push(prodObj[i].prod_subtype_name);
                }
            }
            return subArr;
        }

        // Gets array with sub-products, generates links and appends them to sub-filter container
        function genSubMenu(choice) {
            var subArr = genSubArray(choice);
            var parentCont = $('.sub-filter').find('.container');
            var curSubFilter = $(parentCont).find('.sub-item');
            if (curSubFilter.length !== 0) {
                curSubFilter.remove();
            }
            var elem;
            for(var i = 0; i < subArr.length; i++) {
                elem = $('<a class="sub-item"></a>').text(subArr[i]);
                parentCont.append(elem);
            }
        }

        ajaxSvc.getData(url2)

            .then(function (response) {
                scope.products = response.data;
                scope.topArr = genTopArray(scope.products); //1-st level products categories
                console.log('products:', scope.products);
            },
            function (response) {
                console.log('Some error happened: ', response);
            })

            .then(function () {

                element.html(template).show();

                setTimeout(function () {

                    var elements = $('.main-filter').find('a');

                    $(elements).bind('click', function() {
                        $(elements).removeClass('act');
                        $(this).addClass('act');
                        scope.topChoice = $(this).text();
                        console.log('topChoice:', scope.topChoice);
                        scope.$apply();
                        genSubMenu(scope.topChoice); //Generate sub-menu and append it in sub-menu container
                    })

                }, 1);

                $compile(element.contents())(scope);
            });

    }

    return {
        reuire: 'ngModel',
        restrict: 'EA',
        link: link,
        replace: true,
        templateUrl :"js/partials/dir-tmpl/products-filters-tmpl.html"
    }
});

