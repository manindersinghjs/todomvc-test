define([
    'jquery'
], function($) {
    "use strict";
    var data = {

        // Getting latest results from server
        // key --> name of browser
        getData: function(key, callback) {
            $.ajax({
                    url: "/getData/" + key,
                })
                .done(function(data) {
                    return callback(data);
                });
        }
    }
    return data;
});
