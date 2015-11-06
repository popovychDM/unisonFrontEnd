var ngApp = angular.module('ngApp', [
    //'ngAnimate',      // Temporary commented because of bugs with ui-router
    'appConfig',        // Configs global behavior of app
    'appRun',           // Runs global functions after all instances are created in appConfig
    'appRooting',       // All rooting code is here
    'appPreferences',   // Preferences of current session of app. Can be changed by user or program
    'appConstants',     // Constants are here. Has to be changed only manually (otherwise use appPreferences)
    'appFilters',       // All filters are bootstrapped here
    'appServices',      // All services are bootstrapped here
    'appControllers',   // All controllers are bootstrapped here
    'appDirectives'     // All directives are bootstrapped here
]);