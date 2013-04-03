// Filename: model/index.js

define([
    'underscore',
    'backbone'
], function (
    _,
    Backbone
){

    var Model = Backbone.Model.extend({
        defaults: {
            "name": "Guilherme Fiuza"
        }
    });

    return Model;

});
