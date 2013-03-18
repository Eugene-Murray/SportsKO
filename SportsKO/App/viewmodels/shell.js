define(['durandal/system',
        'durandal/plugins/router',
        'services/logger'],
    //'../../Scripts/infuser'],
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
            //externalTemplates();
            router.mapNav('home');
            router.mapNav('football');
            router.mapNav('rugby');
            router.mapNav('ESPN');
            router.mapNav('twitter');
            log('Hot Towel SPA Loaded!', null, true);
            return router.activate('home');
        }

        function log(msg, data, showToast) {
            logger.log(msg, data, system.getModuleId(shell), showToast);
        }

        function externalTemplates() {
            
            
            infuser.defaults.templatePrefix = "_";
            infuser.defaults.templateSuffix = ".tmpl.html";
            infuser.defaults.templateUrl = "/Tmpl";
            
            console.log(infuser);
        }

//#endregion
    });