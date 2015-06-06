var visibleSteps = function() {
    var assert = require('assert');
    this.World = require("../support/world.js");
    var PROPERTIES = require('../../../config.json');

    this.Given(/^I see enter new toDo "([^"]*)"$/, function(arg1, callback) {
        this.setValue('input#new-todo', arg1, function() {
            callback()
        })
    });

    this.Given(/^I press enter$/, function(callback) {
        this.keys(['Enter'])
            .pause(1000, callback);
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

};

module.exports = visibleSteps;
