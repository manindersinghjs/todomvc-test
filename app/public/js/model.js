define([
    'jquery',
    'underscore',
    'data'
], function($, _, Data) {
    "use strict";
    var model = {
        render: function(cb) {
            Data.getData('chrome', function(data) {
                $('.header').text("RESULTS FOR BROWSER --> CHROME");
                var result = $.parseJSON(data)
                var scenarioName;
                var ulAsString = "";
                for (var i in result) {
                    var liAsString = "";

                    // Setting timr of execution
                    $('.buildTime').text(result[i].time);

                    var featureName = result[i].name;
                    var allScenarios = result[i].elements
                    for (var j in allScenarios) {
                        scenarioName = allScenarios[j].name;
                        var allSteps = allScenarios[j].steps
                        var stepAsString = '';
                        for (var k in allSteps) {
                            var stepName = allSteps[k].name;
                            if (stepName === undefined) {
                                var sName = allSteps[k].keyword;
                                if (sName === "Before ") stepName = "Test Set Up";
                                else stepName = "Test Destoy";
                            }
                            var stepStatus = allSteps[k].result.status;
                            stepAsString += "<p><span> Step : " + stepName + "</span><span class='" + stepStatus + "'>" + stepStatus.toUpperCase() + "</span></p>"
                        }
                        liAsString += "<div><a class='scenario'> Scenario : " + scenarioName + "</a>" + stepAsString + "</div>";
                    }
                    ulAsString += "<div><a  class='feature' >Feature : " + featureName + "</a>" + liAsString + "</div>";
                }
                $('#wrapper').append(ulAsString);
                return cb(scenarioName)
            })
        }
    }
    return model;
});
