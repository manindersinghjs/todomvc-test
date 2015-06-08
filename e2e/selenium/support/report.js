module.exports = function JsonOutputHook() {
    "use strict";
    var Cucumber = require('cucumber');
    var JsonFormatter = Cucumber.Listener.JsonFormatter();
    var fs = require('fs');

    JsonFormatter.log = function(json) {
        var nameBrowser = process.argv[3].replace(/\D/, "");
        var myJson = JSON.parse(json);
        for (var i in myJson) {
            myJson[i].time = Date()
        };
        var result = JSON.stringify(myJson);
        fs.writeFile('result/' + nameBrowser + '.json', result, function(err) {
            if (err) console.log('**** Report not created ****');
        });
    };

    this.registerListener(JsonFormatter);
};
