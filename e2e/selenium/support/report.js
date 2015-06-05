module.exports = function JsonOutputHook() {
  var Cucumber = require('cucumber');
  var JsonFormatter = Cucumber.Listener.JsonFormatter();
  var fs = require('fs');

  JsonFormatter.log = function (json) {
    fs.writeFile('result/result.json', json, function (err) {
      if (err) console.log('**** Report not created ****');
    });
  };

  this.registerListener(JsonFormatter);
};