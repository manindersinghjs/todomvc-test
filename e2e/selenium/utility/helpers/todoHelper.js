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
    },
    checkVisibilityAllTodos: function(S, callback) {
        // S.getText('.view label', function(err, labels) {
        S.getCssProperty('ul#todo-list li', 'display', function(err, labels) {
            var total = 0;
            var result = false;
            for (var i = 0; i < labels.length; i++) {
                (function(i) {
                    console.log("Display === ")
                    console.log(labels[i].value)
                    if (labels[i].value !== none) new Error("Todo with index " + i + " is visible");
                    if (++total == labels.length) result = true;
                })(i);
            }
            callback(result);
        })
    },
    markTodosComplete: function(count, S, callback) {
        S.getText('.view label', function(err, labels) {
            var total = 0;
            var counter = parseInt(count);
            var result = false;
            for (var i = 0; i < counter; i++) {
                (function(i) {
                    var uiLabel = labels[i];
                    console.log("Marking complete :: " + uiLabel);
                    if (++total == counter) result = true;
                })(i);
            }
            callback(result);
        })
    }
}
