var launchSteps = function() {
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
};
module.exports = launchSteps;