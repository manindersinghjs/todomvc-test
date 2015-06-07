require.config({
    paths: {
        jquery: '../libs/jquery/jquery',
        underscore: '../libs/underscore/underscore',
        backbone: '../libs/backbone/backbone',
        app: '../js/app',
        router: '../js/router',
        view: '../js/view',
        model : '../js/model'
    }
});

require(['model'], function(Model) {
    Model.render(function(data){})
})