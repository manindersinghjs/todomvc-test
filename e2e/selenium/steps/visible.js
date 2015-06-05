var visibleSteps = function() {
    var assert = require('assert');
    this.World = require("../support/world.js");
    var PROPERTIES = require('../../../config.json');

// Validating page title
    this.When(/^I see title "([^"]*)"$/, function(arg1, callback) {
        this.title(function(err, res) {
            if (res.value === arg1) callback();
            else callback.fail(new Error("Expected to be on page with title " + arg1));
        })
    });

// Validating size of Logo Image
    this.Given(/^I validate size and source of logo image$/, function(callback) {
        this.getElementSize('img.logo', function(err, size) {
            if ((size.width === 500) && (size.height ===86)) callback();
            else callback.fail(new Error("Expected size is 500X86 but we got "+ size.width+"X"+size.height));
        })
    });

// Verifying visibity of Logo Image
    this.Given(/^I see logo image$/, function(callback) {
        this.isVisible('img.logo', function(err, isVisible) {
            if (isVisible) callback();
            else callback.fail(new Error("Logo Image not displayed"));
        })
    });
};

module.exports = visibleSteps;
