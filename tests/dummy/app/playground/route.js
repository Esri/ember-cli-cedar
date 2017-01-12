import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // bubble scatterplot JSON
    return {
      "type": "bubble",
      "dataset": {
        "url": "https://services.arcgis.com/uDTUpUPbk8X8mXwl/arcgis/rest/services/Public_Schools_in_Onondaga_County/FeatureServer/0",
        "query": {},
        "mappings": {
          "x": {
            "field": "F_of_teach",
            "label": "Fraction of Teachers"
          },
          "y": {
            "field": "Number_of",
            "label": "Number_of"
          },
          "size": {
            "field": "Number_of",
            "label": "Number of Students"
          }
        }
      }
    };
  },
});
