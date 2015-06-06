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
            if ((size.width === 500) && (size.height === 86)) callback();
            else callback.fail(new Error("Expected size is 500X86 but we got " + size.width + "X" + size.height));
        })
    });

    // Verifying visibity of Logo Image
    this.Given(/^I see logo image$/, function(callback) {
        this.isVisible('img.logo', function(err, isVisible) {
            if (isVisible) callback();
            else callback.fail(new Error("Logo Image not displayed"));
        })
    });

    // Verifying logo message
    this.Given(/^I should see text "([^"]*)"$/, function(arg1, callback) {
        this.getText('header div p', function(err, text) {
            if (text === "Helping you select an MV* framework") callback();
            else callback.fail(new Error("Expected logo message is Helping you select an MV* framework but we got " + text));
        })
    });

    // Verifying links text and their url's
    this.Given(/^I should see link "([^"]*)" with href "([^"]*)"$/, function(arg1, arg2, callback) {
        this.getAttribute('*=' + arg1, 'href', function(err, text) {
            // console.log("URL from data :: " + arg2);
            // console.log("URL from UI :: " + text);
            if (text === arg2) callback();
            else callback.fail(new Error("Expected url is " + arg2 + " but we got " + text));
        });
    });
};

module.exports = visibleSteps;
