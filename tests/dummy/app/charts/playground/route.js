import Ember from 'ember';

export default Ember.Route.extend({
  model: function(input) {
    let specification = input;

    console.log(Object.keys(input).length > 0);
    if (Object.keys(input).length > 0) {
      specification = input;
    } else {
      specification = {
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

      let specification2 = {

        "type": "scatter",
        "dataset": {
          "url": "https://services.arcgis.com/uDTUpUPbk8X8mXwl/arcgis/rest/services/Public_Schools_in_Onondaga_County/FeatureServer/0",
          "query": {},
          "mappings": {
            "x": {
              "field": "Number_of",
              "label": "Student Enrollment (2008)"
            },
            "y": {
              "field": "F_of_teach",
              "label": "Fraction of Teachers"
            },
            "color": {
              "field": "Type",
              "label": "Facility Type"
            }
          }
        }
      };
    }

    console.log("SPECIFICATION:", specification);

    return {
      specification: specification
    };
  },
  actions: {
    renderJSON: function(type) {
      let params = JSON.parse(type);
      console.log("input:", params);
      this.model(params);
      // ^fix logc^
    }
  }
});
