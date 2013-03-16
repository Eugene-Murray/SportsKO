define(['services/logger'], function (logger) {
    var vm = {
        activate: activate,
        title: 'Rugby View'
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log('Rugby View Activated', null, 'rugby', true);
        return true;
    }
    //#endregion
});