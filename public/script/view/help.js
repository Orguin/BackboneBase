// Filename: view/help.js

define([
    'jquery',
    'underscore',
    'backbone',
    'text!template/help.hbs'
], function (
    $,
    _,
    Backbone,
    Template
) {

    var View;

    View = Backbone.View.extend({

        el: $('.page'),

        template: Handlebars.compile( Template ),

        initialize: function () {

        },

        render: function () {

            this.$el.html( this.template() );

        }

    });

    return View;

});
