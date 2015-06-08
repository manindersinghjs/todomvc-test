var launchSteps = function() {
    "use strict";
    var assert = require('assert');
    this.World = require("../support/world.js");
    var PROPERTIES = require('../../../config.json');

    // Launching app 
    this.Given(/^I am on ToDo page$/, function(callback) {
        var appUrl = PROPERTIES.url;
        console.log(" Connecting to :: " + appUrl);
        this.init().url(appUrl, function() {
            this.pause(1000, callback);
        });
    });

    this.Given(/^I wait$/, function(callback) {
        this.pause(1000, callback);
    });

    this.Given(/^I wait for "([^"]*)" seconds$/, function(sec, callback) {
        var time = 1000 * sec
        this.pause(time, callback);
    });
};
module.exports = launchSteps;
