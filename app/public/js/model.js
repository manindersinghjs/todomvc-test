define([
    'jquery',
    'underscore',
    'data'
], function($, _, Data) {

    var model = {
        render: function(cb) {
            Data.getData('chrome', function(data) {
                $('.header').text("RESULTS FOR BROWSER --> CHROME");
                $('.buildTime').text(Date());
                var result = $.parseJSON(data)
                var scenarioName;
                var ulAsString = "";
                for (i in result) {
                    var liAsString = "";
                    var featureName = result[i].name;
                    var allScenarios = result[i].elements
                    for (j in allScenarios) {
                        scenarioName = allScenarios[j].name;
                        var allSteps = allScenarios[j].steps
                        var stepAsString = '';
                        for (k in allSteps) {
                            var stepName = allSteps[k].name;
                            if (stepName === undefined) {
                                sName = allSteps[k].keyword;
                                if (sName === "Before ") stepName = "Test Set Up";
                                else stepName = "Test Destoy";
                            }
                            var stepStatus = allSteps[k].result.status;
                            stepAsString += "<ul><li>" + stepName + "</li><li>" + stepStatus + "</li></ul>"
                        }
                        liAsString += "<li>" + scenarioName + stepAsString + "</li>";
                    }
                    ulAsString += "<ul>" + featureName + liAsString + "</ul>";
                }
                $('#wrapper').append(ulAsString);
                return cb(scenarioName)
            })
        }
    }
    return model;
});
