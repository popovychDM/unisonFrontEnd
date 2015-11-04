/**
 * Created by Shuriken on 02.11.2015.
 */

// ADDS attribute to href which opens it in new window
appDirectives.directive('targetBlank', function() {
    return {
        restrict: 'A',
        compile: function(element) {
            var elems = (element.prop("tagName") === 'A') ? element : element.find('a');
            elems.attr("target", "_blank");

        }
    };
});