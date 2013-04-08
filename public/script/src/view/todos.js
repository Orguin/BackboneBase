// Filename: view/todos.js

define([
    'jquery',
    'underscore',
    'backbone',
    'collection/todos',
    'text!template/todos.hbs',
    'view/help'
], function (
    $,
    _,
    Backbone,
    Collection,
    Template,
    HelpView
) {

    var View;

    View = Backbone.View.extend({

        el: $('.page'),

        template: Handlebars.compile( Template ),

        collection: Collection,

        helpview: new HelpView,

        events: {
            'keyup [name=todo]': 'addTodo',
            'click .remove': 'removeTodo'
        },

        initialize: function () {

            this.collection.bind('add remove change', this.render, this);

        },

        render: function () {

            this.$el.html( this.template( { Todos: this.collection.toJSON() } ) );

            // Set element with an element existent in this view.
            // Defined in here, because the element only exists
            // after the rendering of this view.
            this.helpview.setElement( $('.help') );

            // render subview
            this.helpview.render();

        },

        addTodo: function (e) {

            if ( e.which == 13 && e.target.value != '' ) {

                this.collection.add({todo: e.target.value})

                e.target.value = '';

                $('[name=todo]').focus();

                return false;

            }

            return;

        },

        removeTodo: function (e) {

            var cid = $( e.target.parentNode ).data('model-cid');

            if ( cid ) {
                this.collection.remove( cid );
            }

            return false;

        }

    });

    return View;

});
