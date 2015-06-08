"use strict";
module.exports = {

    addTodos: function(count, S, callback) {

        var total = 0;
        var counter = parseInt(count);
        var result = false;
        for (var i = 0; i < counter; i++) {
            (function(i) {
                var dataLabel = 'My TODO ' + i;
                S.setValue('input#new-todo', dataLabel, function() {});
                console.log("Adding :: " + dataLabel);
                S.keys(['Enter'], function() {});
                if (++total == counter) result = true;
            })(i);
        }
        callback(result);
    },
    verifyTodos: function(count, S, callback) {
        S.getText('.view label', function(err, labels) {
            var total = 0;
            var counter = parseInt(count);
            var result = false;
            for (var i = 0; i < counter; i++) {
                (function(i) {
                    var uiLabel = labels[i];
                    var dataLabel = 'My TODO ' + i;
                    console.log("Validating :: " + dataLabel);
                    if (uiLabel !== dataLabel) new Error("Expected Label :: " + dataLabel + " but we got :: " + uiLabel);
                    if (++total == counter) result = true;
                })(i);
            }
            callback(result);
        })
    }
}
