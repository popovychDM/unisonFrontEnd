/**
 * Created by Shuriken on 02.11.2015.
 */

appDirectives.directive('targetBlank', function() {
    return {
        compile: function(element) {
            var elems = (element.prop("tagName") === 'A') ? element : element.find('a');
            elems.attr("target", "_blank");
        }
    };
});