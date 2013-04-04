// Filename: main.js

// config alias
require.config({
    paths: {
        jquery: '../lib/jquery/1.9.1/jquery.min',
        underscore: '../lib/underscore/1.4.4/underscore.min',
        backbone: '../lib/backbone/1.0.0/backbone.min'
    }
});


// bootstrap
require([
    'app'
], function ( App ) {

    App.Init();

});
