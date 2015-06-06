var myBeforeHooks = function() {
    this.Before(function(callback) {
        console.log(' ***** Builing Test ***** ');
        callback();
    });

};
module.exports = myBeforeHooks;