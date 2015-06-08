var visibleSteps = function() {
    "use strict";
    var assert = require('assert');
    this.World = require("../support/world.js");
    var PROPERTIES = require('../../../config.json');
    var HELPER = require('../utility/helpers/todoHelper.js');

    this.Given(/^I enter new toDo "([^"]*)"$/, function(arg1, callback) {
        this.setValue('input#new-todo', arg1, function() {
            callback()
        })
    });

    this.Given(/^I press enter$/, function(callback) {
        this.keys(['Enter'], callback);
    });

    this.Given(/^I verify "([^"]*)" is displayed$/, function(arg1, callback) {
        this.getText('.view label', function(err, text) {
            console.log("tetx == " + text)
            if (text === arg1) callback();
            else callback.fail(new Error("Input was not sucessful"));
        });
    });

    this.Given(/^I verify todo count with "([^"]*)" todo$/, function(arg1, callback) {
        this.getText('#todo-count', function(err, text) {
            console.log(text.indexOf(arg1) > -1);
            if (text.indexOf(arg1) > -1) callback();
            else callback.fail(new Error("Input was not sucessful"));
        });
    });

    this.Given(/^I verify link "([^"]*)" with href "([^"]*)"$/, function(arg1, arg2, callback) {
        this.getAttribute('*=' + arg1, 'href', function(err, text) {;
            if (text === arg2) callback();
            else callback.fail(new Error("Expected url is " + arg2 + " but we got " + text));
        });
    });

    this.Given(/^I enter "([^"]*)" toDo$/, function(arg1, callback) {
        HELPER.addTodos(arg1, this, function(result) {
            if (result) callback();
            else callback.fail(new Error("Adding TODO failed"));
        })
    });

    this.Given(/^I verify "([^"]*)" toDo displayed$/, function(arg1, callback) {
        HELPER.verifyTodos(arg1, this, function(result) {
            if (result) callback();
            else callback.fail(new Error("Validate Added TODO failed"));
        })
    });
};

module.exports = visibleSteps;
