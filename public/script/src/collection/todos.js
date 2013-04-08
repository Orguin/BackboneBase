// Filename: collection/todos.js

define([
    'underscore',
    'backbone',
	'backbone.offline',
    'model/todo'
], function (
    _,
    Backbone,
	Offline,
    Model
){

    var Collection = Backbone.Collection.extend({
	
		url: '/api/todos/',
		
        model: Model,
		
		initialize: function () {
			// enable offline storage
			this.storage = new Offline.Storage('todos',this);
		}
		
    });

    return new Collection;

});
