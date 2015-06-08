"use strict";
this.World = require("../support/world.js");
module.exports = {

    checkVisibility: function(key) {
        this.isVisible(key, function(err) {
            if (err) callback.fail(new Error("Element not found "));
            console.log("Element found ");
        });
    }
}
