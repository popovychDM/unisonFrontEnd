/**
 * Created by Shuriken on 06.11.2015.
 */

angular.module('appConfig', [])
    .config([
        '$provide',

        function($provide) {

            // START INJECT SERVICE WITH EXTERNAL DATA URLS //
            $provide.factory('extDataUrls', function() {
                return {

                    keyAdvSlide: 'jsons/keyAdvSlide.json',
                    mainSlider: 'jsons/mainSlider.json',
                    fastMenu: 'jsons/fastMenu.json',
                    productsFilters: 'jsons/productsFilters.json',
                    orderForm: 'jsons/orderForm.json'

                    //keyAdvSlide: 'http://192.168.50.56:8080/ords/virtualbranch_ws/interface/KeyAdvantages/1',
                    //mainSlider: 'http://192.168.50.56:8080/ords/virtualbranch_ws/interface/SliderBlock/1',
                    //fastMenu: 'http://192.168.50.56:8080/ords/virtualbranch_ws/interface/FastMenu/1',
                    //productsFilters: 'http://192.168.50.56:8080/ords/virtualbranch_ws/reference/open/ProductStructure/1',
                    //orderForm: 'http://192.168.50.56:8080/ords/virtualbranch_ws/reference/open/AnketaQuestTree/1/1/1'
                }
            });
            // END INJECT SERVICE WITH EXTERNAL DATA URLS //

}]);
