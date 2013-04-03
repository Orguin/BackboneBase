// Filename: app.js

define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function (
    $,
    _,
    Backbone,
    Router
) {

    // make Backbone.Model.toJSON recursive
    // https://github.com/documentcloud/backbone/issues/483
    // and include CID
    Backbone.Model.prototype.toJSON = function() {

        if (this._isSerializing) {
            return this.id || this.cid;
        }

        this._isSerializing = true;

        var json = _.clone(this.attributes);

        _.each(json, function(value, name) {
            _.isFunction(value.toJSON) && (json[name] = value.toJSON());
        });

        this._isSerializing = false;

        json.cid = this.cid;

        return json;

    }


    // private
    // var

    // public
    var app;

    // only public methods
    app = {
        Init: function () {

            Router.Init();

        }
    }

    return app;

});
