/**
 * Created by Shuriken on 19.10.2015.
 */
appDirectives.directive('productsFilters', function ($compile, ajaxSvc, extDataUrls) {

    var url = extDataUrls.productsFilters;
    var template, products;


    function link(scope, element, attrs) {


        // This function runs to check if some filter should be applied
        // on products to show. This filter is passed from other page
        // via $stateParams variable.
        // Here we check if this variable is true. If true, we apply filter.

        function checkScopeParams() {
           var criteria;
           var productsArr = scope.products.items;
           if (scope.$stateParams.fast_menu_filter) {
               criteria = scope.$stateParams.fast_menu_filter;
               for (var i = 0; i < productsArr.length; i++) {
                   if (productsArr[i].prod_type_name === criteria) {
                       scope.topChoice = criteria;
                       scope.$apply();
                       return;
                   } else if (productsArr[i].prod_subtype_name === criteria) {
                       scope.subChoice = criteria;
                       scope.$apply();
                       return;
                   }
               }
           }
       }

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
                    if(subArr.indexOf(prodObj[i].prod_subtype_name) === -1) {
                        subArr.push(prodObj[i].prod_subtype_name);
                    }
                }
            }
            return subArr;
        }

        // Apply this function after subMenu has been generated
        // subFilterlogic() adds subFilter when clicked on sub Item in Menu
        function subFilterlogic() {

            var subElements = jQuery('.sub-filter').find('.sub-item');

            jQuery(subElements).bind('click', function() {
                jQuery(subElements).removeClass('act');
                jQuery(this).addClass('act');
                scope.subChoice = jQuery(this).text();
                // console.log('subChoice:', scope.subChoice);
                scope.$apply();
            })
        }

        // Gets array with sub-products, generates links and appends them to sub-filter container
        function genSubMenu(choice) {
            var subArr = genSubArray(choice);
            var parentCont = jQuery('.sub-filter').find('.container');
            var curSubFilter = jQuery(parentCont).find('.sub-item');
            if (curSubFilter.length !== 0) {
                curSubFilter.remove();
            }
            var elem;
            for(var i = 0; i < subArr.length; i++) {
                elem = jQuery('<a class="sub-item"></a>').text(subArr[i]);
                parentCont.append(elem);
            }
            subFilterlogic();
        }

        ajaxSvc.getData(url)

            .then(function (response) {
                scope.products = response.data;
                scope.topArr = genTopArray(scope.products); //1-st level products categories
                console.log('products:', scope.products);
            },
            function (response) {
                console.log('Some error happened: ', response);
            })

            .then(function () {

                // element.html(template).show();

                setTimeout(function () {

                    // This code is called from Tiomeout function, because it needs the
                    // template to be drawn in DOM to fine topElements in it

                    var topElements = jQuery('.main-filter').find('a');

                    jQuery(topElements).bind('click', function() {
                        scope.subChoice = ''; // Here we reset subChoice each time we click on topChoice
                        jQuery(topElements).removeClass('act');
                        jQuery(this).addClass('act');
                        scope.topChoice = jQuery(this).text();
                        // console.log('topChoice:', scope.topChoice);
                        scope.$apply();
                        genSubMenu(scope.topChoice); //Generate sub-menu and append it in sub-menu container
                    });

                    checkScopeParams();

                }, 1);

                // $compile(element.contents())(scope);
            });

    }

    return {
        restrict: 'A',
        link: link,
        replace: true,
        templateUrl :"js/partials/dir-tmpl/products-filters-tmpl.html"
    }
});

