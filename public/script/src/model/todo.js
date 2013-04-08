// Filename: model/todo.js

define([
    'underscore',
    'backbone'
], function (
    _,
    Backbone
){

    var Model = Backbone.Model.extend({
		defaults: {
            'todo': 'Blank'
        }
    });

    return Model;

});
