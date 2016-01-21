import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    /* jshint quotmark: false */
    let specification = {
      "type": "bar",
      "dataset": {
        "url": "https://services.arcgis.com/uDTUpUPbk8X8mXwl/arcgis/rest/services/Public_Schools_in_Onondaga_County/FeatureServer/0",
        "query": {
          "groupByFieldsForStatistics": "Type",
          "outStatistics": [{
            "statisticType": "sum",
            "onStatisticField": "Number_of",
            "outStatisticFieldName": "Number_of_SUM"
          }]
        },
        "mappings": {
          "sort": "Number_of_SUM DESC",
          "x": {
            "field": "Type",
            "label": "Facility Use"
          },
          "y": {
            "field": "Number_of_SUM",
            "label": "Total Students"
          }
        }
      },
      "tooltip": {
        "title": "{Type}",
        "content": "{Number_of_SUM} Students in {Type}"
      }
    };
    let options = {
      autolabels: true,
      renderer: 'svg',
      id: 'chart1'
    };
    return {
      specification: specification,
      options: options,
      title: Ember.String.capitalize(params.slug)
    };
  }
});
