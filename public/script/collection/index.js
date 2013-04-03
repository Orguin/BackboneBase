// Filename: collection/index.js

define([
    'underscore',
    'backbone',
    'model/index'
], function (
    _,
    Backbone,
    Model
){

    var Collection = Backbone.Collection.extend({
        model: Model
    });

    return new Collection;

});
