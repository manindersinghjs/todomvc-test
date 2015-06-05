var myBeforeHooks = function() {
    this.Before(function(callback) {
        console.log(' ***** In before hook ***** ');
        callback();
    });

};
module.exports = myBeforeHooks;