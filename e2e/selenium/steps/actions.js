var actionSteps = function() {
    "use strict";
    var assert = require('assert');
    this.World = require("../support/world.js");
    var PROPERTIES = require('../../../config.json');
    var HELPER = require('../utility/helpers/todoHelper.js');

    this.Given(/^I click on toggle todo icon$/, function(callback) {
        this.click('#main input', function() {
            console.log("Element with id toggle-all clicked");
            callback();
        })
    });

    this.When(/^I click on "([^"]*)" link$/, function(text, callback) {
        this.click('=' + text, function() {
            console.log("Element with id toggle-all clicked");
            callback();
        })
    });

    this.Then(/^I mark "([^"]*)" todos as completed$/, function(arg1, callback) {
        HELPER.markTodosComplete(arg1, this, function(result) {
            if (result) callback();
            else callback.fail(new Error("Todo's are visible"));
        })
    });
};
module.exports = actionSteps;
