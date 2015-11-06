/**
 * Created by Shuriken on 06.11.2015.
 */

// We store applications preferences in this module. These data can be changed by user or other modules
// And can be injected in controllers/directives/services as global variable

angular.module('appPreferences', [])
    .value('preferences', {

        lang_pref: ''

    });
