import Ember from 'ember';

export default Ember.Route.extend({
  model: function(/*input*/) {
    // let specification = input;
    // // bar JSON
    // let specification1 = {
    //   "type": "bar",
    //   "dataset": {
    //     "url": "https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Education_WebMercator/MapServer/5",
    //     "query": {
    //       "groupByFieldsForStatistics": "ZIP_CODE",
    //       "outStatistics": [{
    //         "statisticType": "sum",
    //         "onStatisticField": "TOTAL_STUD",
    //         "outStatisticFieldName": "TOTAL_STUD_SUM"
    //       }]
    //     },
    //     "mappings": {
    //       "sort": "TOTAL_STUD_SUM DESC",
    //       "x": {
    //         "field": "ZIP_CODE",
    //         "label": "ZIP Code"
    //       },
    //       "y": {
    //         "field": "TOTAL_STUD_SUM",
    //         "label": "Total Students"
    //       }
    //     }
    //   }
    // };
    // // scatterplot JSON
    // let specification2 = {
    //   "type": "scatter",
    //   "dataset": {
    //     "url": "https://services.arcgis.com/uDTUpUPbk8X8mXwl/arcgis/rest/services/Public_Schools_in_Onondaga_County/FeatureServer/0",
    //     "query": {},
    //     "mappings": {
    //       "x": {
    //         "field": "Number_of",
    //         "label": "Student Enrollment (2008)"
    //       },
    //       "y": {
    //         "field": "F_of_teach",
    //         "label": "Fraction of Teachers"
    //       },
    //       "color": {
    //         "field": "Type",
    //         "label": "Facility Type"
    //       }
    //     }
    //   }
    // };
    // // map chart JSON - currently not a working specification
    // let specification3 = {
    //   "inputs": [{
    //     "name": "value",
    //     "type": ["numeric"],
    //     "required": true
    //   }],
    //   "template": {
    //     "data": [{
    //       "name": "table",
    //       "format": {
    //         "property": "features"
    //       }
    //     }, {
    //       "name": "area",
    //       "url": "http://opendata.dc.gov/datasets/4919ca2fa0894de18e4752a5e16ca683_22.geojson",
    //       "format": {
    //         "type": "json",
    //         "property": "features"
    //       },
    //       "transform": [{
    //         "type": "geopath",
    //         "value": "data",
    //         "projection": "mercator",
    //         "scale": 100000,
    //         "center": [-77.03687, 38.90719],
    //         "translate": [0, 0]
    //       }]
    //     }],
    //     "legends": [{
    //       "fill": "color",
    //       "title": "Vegetation",
    //       "offset": -600,
    //       "values": [0, 0.2, 0.4, 0.6, 0.8, 1.0]
    //     }],
    //     "scales": [{
    //       "name": "color",
    //       "type": "quantize",
    //       "domain": {
    //         "data": "area",
    //         "field": "properties.{value.field}"
    //       },
    //       "range": ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6",
    //         "#4292c6", "#2171b5", "#08519c", "#08306b"
    //       ]
    //     }],
    //     "marks": [{
    //       "type": "path",
    //       "from": {
    //         "data": "area"
    //       },
    //       "properties": {
    //         "enter": {
    //           "fill": {
    //             "value": "#dedede"
    //           },
    //           "stroke": {
    //             "value": "white"
    //           },
    //           "path": {
    //             "field": "layout_path"
    //           }
    //         },
    //         "update": {
    //           "fill": {
    //             "scale": "color",
    //             "field": "properties.{value.field}"
    //           }
    //         },
    //
    //         "hover": {
    //           "fill": {
    //             "value": "red"
    //           }
    //         }
    //       }
    //     }]
    //   }
    //
    // };
    // bubble scatterplot JSON
    let specification4 = {
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
    console.log("SPECIFICATION:", specification4);
    return {
      specification: specification4
    };
  },
});
