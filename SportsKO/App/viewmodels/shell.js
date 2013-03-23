define(['durandal/system',
        'durandal/plugins/router',
        'services/logger'],
    function (system, router, logger) {
        var shell = {
            activate: activate,
            router: router
        };
        
        return shell;

        //#region Internal Methods
        function activate() {
            
            return boot();
        }

        function boot() {
 
            router.mapNav('home');
            router.mapNav('football');
            router.mapNav('rugby');
            router.mapNav('ESPN');
            router.mapNav('twitter');
            log('App Loaded!', null, true);
            return router.activate('home');
        }

        function log(msg, data, showToast) {
            logger.log(msg, data, system.getModuleId(shell), showToast);
        }

       

//#endregion
    });