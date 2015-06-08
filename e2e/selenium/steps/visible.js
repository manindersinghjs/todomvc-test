var visibleSteps = function() {
    "use strict";
    var assert = require('assert');
    this.World = require("../support/world.js");
    var PROPERTIES = require('../../../config.json');
    var HELPER = require('../utility/helpers/todoHelper.js');

    // Validating page title
    this.When(/^I see title "([^"]*)"$/, function(arg1, callback) {
        this.title(function(err, res) {
            if (res.value === arg1) callback();
            else callback.fail(new Error("Expected to be on page with title " + arg1));
        })
    });

    this.Given(/^I see header "([^"]*)"$/, function(arg1, callback) {
        this.getText('header#header h1', function(err, text) {
            if (text === arg1) callback();
            else callback.fail(new Error("Expected ::" + arg1 + " but we got " + text));
        })

    });

    this.Given(/^I see input with placeholder "([^"]*)"$/, function(arg1, callback) {
        this.getAttribute('#new-todo', 'placeholder', function(err, text) {
            if (text === arg1) callback();
            else callback.fail(new Error("Expected :: " + arg1 + " but we got " + text));
        });
    });

    this.When(/^I see all todos are hidden$/, function(callback) {
        HELPER.checkVisibilityAllTodos(this, function(result) {
            if (result) callback();
            else callback.fail(new Error("Todo's are visible"));
        })
    });
};

module.exports = visibleSteps;
