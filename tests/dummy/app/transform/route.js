import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      type: 'pie',
      datasets: [{
        "name": "students",
        "url": "https://services.arcgis.com/uDTUpUPbk8X8mXwl/arcgis/rest/services/Public_Schools_in_Onondaga_County/FeatureServer/0",
        "query": {
          "orderByFields": "Number_of_SUM DESC",
          "groupByFieldsForStatistics": "Type",
          "outStatistics": [{
            "statisticType": "sum",
            "onStatisticField": "Number_of",
            "outStatisticFieldName": "Number_of_SUM"
          }]
        }
      }],
      series: [{
        "source": "students",
        "category": {
          "field": "Type",
          "label": "Type"
        },
        "value": {
          "field": "Number_of_SUM",
          "label": "Total Students"
        }
      }],
      // in amCharts, you don't need a transform to group small pie slices
      // but for this contrived example, we'll override the default behavior
      // so we can use the existing transform code
      // TODO: use a better example
      overrides: {
        groupPercent: 0
      }
    };
  }
});
