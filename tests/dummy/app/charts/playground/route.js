import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // return hardcoded JSON
    // should be able to bind both the chart [needs json] and the specification (text control) [needs string] to the hardcoded JSON
    // using an ember computed property would make the type matching work better. using a controller (ember g controller charts/playground --dummy) / (component preferable, to do the stringifying)
    // [ember g component after using the controller]
    let specification = {
      "type": "bar",
      
      "padding": "strict",
      "axes": [{
        "type": "x",
        "scale": "x",
        "titleOffset": 35,
        "title": "Total Students",
        "tickPadding": 10,
        "properties": {
          "title": {
            "fontSize": {
              "value": 15
            },
            "fill": {
              "value": "#999"
            },
            "fontWeight": {
              "value": "normal"
            }
          },
          "axis": {
            "stroke": {
              "value": "#dbdad9"
            },
            "strokeWidth": {
              "value": 1.5
            }
          },
          "ticks": {
            "stroke": {
              "value": "#dbdad9"
            }
          },
          "labels": {
            "fill": {
              "value": "#999"
            },
            "angle": {
              "value": 0
            },
            "baseline": {
              "value": "middle"
            }
          }
        },
        "ticks": 12.47
      }, {
        "type": "y",
        "scale": "y",
        "titleOffset": 75,
        "title": "Zip",
        "padding": 0.25,
        "properties": {
          "title": {
            "fontSize": {
              "value": 15
            },
            "fill": {
              "value": "#999"
            },
            "fontWeight": {
              "value": "normal"
            }
          },
          "axis": {
            "stroke": {
              "value": "#dbdad9"
            },
            "strokeWidth": {
              "value": 1.5
            }
          },
          "ticks": {
            "stroke": {
              "value": "#dbdad9"
            }
          },
          "labels": {
            "fill": {
              "value": "#999"
            },
            "angle": {
              "value": 0
            },
            "baseline": {
              "value": "middle"
            }
          }
        },
        "ticks": 16.666666666666668
      }],
      "data": [{
        "name": "table",
        "format": {
          "property": "features"
        },
        "values": {
          "objectIdFieldName": "FID",
          "globalIdFieldName": "",
          "geometryType": "esriGeometryPoint",
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          },
          "fields": [{
            "name": "Number_of_SUM",
            "type": "esriFieldTypeDouble",
            "alias": "Number_of_SUM",
            "sqlType": "sqlTypeFloat",
            "domain": null,
            "defaultValue": null
          }, {
            "name": "Zip",
            "type": "esriFieldTypeDouble",
            "alias": "Zip",
            "sqlType": "sqlTypeFloat",
            "domain": null,
            "defaultValue": null
          }],
          "features": [{
            "attributes": {
              "Number_of_SUM": 253,
              "Zip": 13207
            }
          }, {
            "attributes": {
              "Number_of_SUM": 114,
              "Zip": 13205
            }
          }, {
            "attributes": {
              "Number_of_SUM": 111,
              "Zip": 13204
            }
          }, {
            "attributes": {
              "Number_of_SUM": 65,
              "Zip": 13208
            }
          }, {
            "attributes": {
              "Number_of_SUM": 50,
              "Zip": 13203
            }
          }, {
            "attributes": {
              "Number_of_SUM": 46,
              "Zip": 13224
            }
          }, {
            "attributes": {
              "Number_of_SUM": 41,
              "Zip": 13206
            }
          }, {
            "attributes": {
              "Number_of_SUM": 28,
              "Zip": 13088
            }
          }, {
            "attributes": {
              "Number_of_SUM": 27,
              "Zip": 13209
            }
          }, {
            "attributes": {
              "Number_of_SUM": 26,
              "Zip": 13212
            }
          }, {
            "attributes": {
              "Number_of_SUM": 25,
              "Zip": 13202
            }
          }, {
            "attributes": {
              "Number_of_SUM": 23,
              "Zip": 13090
            }
          }, {
            "attributes": {
              "Number_of_SUM": 23,
              "Zip": 13210
            }
          }, {
            "attributes": {
              "Number_of_SUM": 22,
              "Zip": 13057
            }
          }, {
            "attributes": {
              "Number_of_SUM": 21,
              "Zip": 13084
            }
          }, {
            "attributes": {
              "Number_of_SUM": 20,
              "Zip": 13080
            }
          }, {
            "attributes": {
              "Number_of_SUM": 19,
              "Zip": 13027
            }
          }, {
            "attributes": {
              "Number_of_SUM": 16,
              "Zip": 13031
            }
          }, {
            "attributes": {
              "Number_of_SUM": 14,
              "Zip": 13120
            }
          }, {
            "attributes": {
              "Number_of_SUM": 12,
              "Zip": 13039
            }
          }, {
            "attributes": {
              "Number_of_SUM": 9,
              "Zip": 13066
            }
          }, {
            "attributes": {
              "Number_of_SUM": 9,
              "Zip": 13078
            }
          }, {
            "attributes": {
              "Number_of_SUM": 8,
              "Zip": 13152
            }
          }, {
            "attributes": {
              "Number_of_SUM": 7,
              "Zip": 13108
            }
          }, {
            "attributes": {
              "Number_of_SUM": 6,
              "Zip": 13211
            }
          }, {
            "attributes": {
              "Number_of_SUM": 5,
              "Zip": 13104
            }
          }, {
            "attributes": {
              "Number_of_SUM": 4,
              "Zip": 13159
            }
          }, {
            "attributes": {
              "Number_of_SUM": 3,
              "Zip": 13215
            }
          }, {
            "attributes": {
              "Number_of_SUM": 1,
              "Zip": 13219
            }
          }, {
            "attributes": {
              "Number_of_SUM": 1,
              "Zip": 13708
            }
          }, {
            "attributes": {
              "Number_of_SUM": 1,
              "Zip": 13214
            }
          }, {
            "attributes": {
              "Number_of_SUM": 1,
              "Zip": 13063
            }
          }]
        }
      }],
      "marks": [{
        "from": {
          "data": "table"
        },
        "properties": {
          "enter": {
            "height": {
              "band": true,
              "offset": -1,
              "scale": "y"
            },
            "y": {
              "scale": "y",
              "field": "attributes.Zip"
            },
            "x2": {
              "scale": "x",
              "field": "attributes.Number_of_SUM"
            },
            "x": {
              "scale": "x",
              "value": 0
            }
          },
          "hover": {
            "fill": {
              "value": "#29b6ea"
            }
          },
          "update": {
            "fill": {
              "value": "#0079c1"
            }
          }
        },
        "type": "rect"
      }],
      "scales": [{
        "domain": {
          "data": "table",
          "field": "attributes.Zip"
        },
        "name": "y",
        "range": "height",
        "type": "ordinal",
        "padding": 0.25
      }, {
        "domain": {
          "data": "table",
          "field": "attributes.Number_of_SUM"
        },
        "name": "x",
        "nice": true,
        "range": "width"
      }]
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
