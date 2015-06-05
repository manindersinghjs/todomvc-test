var myAfterHooks = function() {

    this.After(function(callback) {
        console.log(' ***** In after hook ***** ');
        this.end(callback);
    });
};
module.exports = myAfterHooks;
