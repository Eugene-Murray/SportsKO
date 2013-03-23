define(['services/logger'], function (logger) {
    
    var vm = {
        activate: activate,
        title: 'Home View',
        espnTemplate : ko.observable('ESPN')
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('Home View Activated', null, 'home', true);http://localhost:57703/App/viewmodels
        return true;
    }
    //#endregion
});