define(['services/logger'], function (logger) {

    var vm = {
        activate: activate,
        title: 'ESPN View'
        
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('ESPN View Activated', null, 'home', true); 
            return true;
    }
    //#endregion
});