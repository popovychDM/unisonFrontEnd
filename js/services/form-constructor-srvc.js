/**
 * Created by Shuriken on 11.11.2015.
 */

(function() {

    appServices.factory('formConstructSvc', function() {

        var readyForm, section, fieldsObj, sectionsHTML, sectionWithColumns, elem;
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

        function createField(fieldObj) {
            elem = $('<input>', { type: fieldObj.field_type, placeholder: fieldObj.field_name});
            return elem;
        }

        function createSectionColumns(section, fieldsObj) {

            var dummyElemContainer;
            var dummyElem;

            var leftColumn = $('<div />').addClass('left-side');
            var rightColumn = $('<div />').addClass('right-side');

            for (var j = 0; j < fieldsObj.anketa_field.length; j += 1) {
                dummyElem = createField(fieldsObj.anketa_field[j]);
                //dummyElem = $('<input />', { type : 'text', placeholder:'Surname', value: 'Snow'});
                dummyElemContainer = $('<div />').addClass('form-field').append(dummyElem);
                if (fieldsObj.anketa_field[j].field_column === "L") {
                    $(leftColumn).append(dummyElemContainer);
                } else {
                    $(rightColumn).append(dummyElemContainer);
                }
            }
            $(section).find('.container').append(leftColumn).append(rightColumn);
            return section;
        }

        function buildForm() {
            for (var i = 0; i < fieldsObj.length; i += 1) {
                section = createSection(fieldsObj[i].block_name);
                sectionWithColumns = createSectionColumns(section, fieldsObj[i]);
                $(rootElement).append(sectionWithColumns);
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
