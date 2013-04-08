// Filename: router.js

define([
    'jquery',
    'underscore',
    'backbone'
], function (
    $,
    _,
    Backbone
) {

    // private
    var routes,
        AppRouter;

    // define routes
    routes = {
        '': 'todos',
        'help': 'help'
    };

    // application router
    AppRouter = Backbone.Router.extend({
        routes: routes
    });


    // public
    var app;

    // only public methods
    app = {
        Init: function () {

            var app_router = new AppRouter;

            _.each(routes, function ( value, key ) {

                app_router.on('route:' + value, function () {

                    require([ 'view/' + value ], function ( View ) {

                        var view = new View();

                        view.$el.removeClass().addClass('page ' +  value);

                        view.render();

                    });

                });

            });

            // history
            Backbone.history.start();

        }
    }

    return app;

});
