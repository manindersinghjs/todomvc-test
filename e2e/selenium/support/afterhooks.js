var myAfterHooks = function() {

    this.After(function(callback) {
        console.log(' ***** Destroying Test ***** ');
        this.end(callback);
    });
};
module.exports = myAfterHooks;
