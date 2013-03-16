define(['services/logger'], function (logger) {

    //infuser.defaults.templatePrefix = "_";
    //infuser.defaults.templateSuffix = ".tmpl.html";
    //infuser.defaults.templateUrl = "/Tmpl/ffff";

    var vm = {
        activate: activate,
        title: 'ESPN View'
        
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('ESPN View Activated', null, 'home', true); http://localhost:57703/App/viewmodels
            return true;
    }
    //#endregion
});