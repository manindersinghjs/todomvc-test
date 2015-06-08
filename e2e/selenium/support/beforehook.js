var myBeforeHooks = function() {
    "use strict";
    this.Before(function(callback) {
        console.log(' ***** Builing Test ***** ');
        callback();
    });

};
module.exports = myBeforeHooks;
