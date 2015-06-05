var indexSteps = function() {
    var assert = require('assert');
    this.World = require("../support/world.js");
    var PROPERTIES = require('../../../config.json');

    this.Given(/^I am on home page$/, function(callback) {

        var appUrl = PROPERTIES.url;
        console.log(" Connecting to :: " + appUrl);
        this.init().url(appUrl, function() {
            this.pause(1000, callback);
        });
    });

    this.When(/^I see home tab$/, function(callback) {
        this.title(function(err, res) {
            console.log('Title : ' + res.value + " == " + arg1);
            if (res.value === arg1) callback();
            else callback.fail(new Error("Expected to be on page with title " + arg1));
        })
    });

    this.When(/^I see title "([^"]*)"$/, function(arg1, callback) {
        this.title(function(err, res) {
            console.log('Title : ' + res.value + " == " + arg1);
            if (res.value === arg1) callback();
            else callback.fail(new Error("Expected to be on page with title " + arg1));
        })
    });
};

module.exports = indexSteps;
