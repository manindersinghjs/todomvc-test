module.exports = function(callback) {
    "use strict";
    var PROPERTIES = require('../config.json');
    process.argv.forEach(function(val, index, array) {
        var browsr = val.replace(/\D/, "");
        PROPERTIES.browser = browsr;
    });

    if (callback) {

        console.log('Loading browser ');
        var browser = require('webdriverio').remote({
            logLevel: PROPERTIES.logLevel || 'none',
            host: PROPERTIES.host || 'localhost',
            desiredCapabilities: {
                browserName: PROPERTIES.browser || 'chrome'
            }
        });
        console.log(" **** " + PROPERTIES.browser + " **** ");
        callback(browser);
    }
};
