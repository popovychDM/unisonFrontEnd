/**
 * Created by Shuriken on 11.11.2015.
 */

(function() {

    appServices.factory('formConstructSvc', function() {

        var readyForm, section, fieldsObj, sectionsHTML;
        var rootElement = document.createDocumentFragment();

        function matchSectionNames(sectionName) {
            var sectionSelector;
            switch(sectionName)
            {
                case 'CLI_INFO': sectionSelector = "user-info";
                break;

                case 'CLI_PASP': sectionSelector = "pass-info";
                break;

                case 'CLI_LAT': sectionSelector = "user-info";
                break;

                case 'CLI_ADDRESS': sectionSelector = "address-info";
                break;

                case 'PRODUCT': sectionSelector = "pass-info";
                break;

                case 'DELIVERY': sectionSelector = "address-info";
                break;
            }
            return sectionSelector;
        }

        function createSection(sectionName) {
            var sectionSelectorName = matchSectionNames(sectionName);
            var container = $('<div />').addClass('container clearfix');
            section = $('<div />').addClass('order-block');
            section.addClass(sectionSelectorName).append(container);
            return section;
        }

        function buildForm() {
            for (var i = 0; i < fieldsObj.length; i +=1) {
                section = createSection(fieldsObj[i].block_name);
                $(rootElement).append(section);
            }
           return rootElement;
        }

        function construct(data) {
            fieldsObj = data.items;
            console.log('formFields:',  fieldsObj);
            sectionHTML = buildForm();
            return sectionHTML;
        }

        return {
            formConstruct: construct
        }
    });

})();
