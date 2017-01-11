import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return {
      type: 'pie',
      dataset: {
        "url":"https://services.arcgis.com/uDTUpUPbk8X8mXwl/arcgis/rest/services/Public_Schools_in_Onondaga_County/FeatureServer/0",
        "query": {
          "orderByFields": "Number_of_SUM DESC",
          "groupByFieldsForStatistics": "Type",
          "outStatistics": [{
            "statisticType": "sum",
            "onStatisticField": "Number_of",
            "outStatisticFieldName": "Number_of_SUM"
          }]
        },
        "mappings":{
          "label": {"field":"Type","label":"Type"},
          "y": {"field":"Number_of_SUM","label":"Total Students"},
          "radius": 270
        }
      }
    };
  }
});
