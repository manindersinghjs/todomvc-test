require.config({
    shim: {
        "bootstrap": {
            "deps": ['jquery']
        }
    },
    paths: {
        jquery: '../libs/jquery/jquery',
        underscore: '../libs/underscore/underscore',
        backbone: '../libs/backbone/backbone',
        app: '../js/app',
        router: '../js/router',
        view: '../js/view',
        model: '../js/model',
        bootstrap: "../libs/bootstrap/js/bootstrap"
    }
});

require(['model', 'bootstrap'], function(Model, bootstrap) {
    "use strict";
    Model.render(function(data) {})
})
