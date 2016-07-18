import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // return hardcoded JSON
    // should be able to bind both the chart [needs json] and the specification (text control) [needs string] to the hardcoded JSON
    // using an ember computed property would make the type matching work better. using a controller (ember g controller charts/playground --dummy) / (component preferable, to do the stringifying)
    // [ember g component after using the controller]
    let specification = {
      "type": "bar",

      "dataset": {

        "url": "http://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Education_WebMercator/MapServer/5",
        "query": {
          "groupByFieldsForStatistics": "ZIP_CODE",
          "outStatistics": [{
            "statisticType": "sum",
            "onStatisticField": "TOTAL_STUD",
            "outStatisticFieldName": "TOTAL_STUD_SUM"
          }]
        },
        "mappings": {
          "sort": "TOTAL_STUD_SUM DESC",
          "x": {
            "field": "ZIP_CODE",
            "label": "ZIP Code"
          },
          "y": {
            "field": "TOTAL_STUD_SUM",
            "label": "Total Students"
          }
        }
      }
    };

    return {
      specification: specification
    };
  },
  actions: {
    renderJSON: function(type) {
      let params = JSON.parse(type);
      console.log("input:", params);
      console.log(this.model(params));
      this.model(params);
      // ^fix logc^
    }
  }
});
