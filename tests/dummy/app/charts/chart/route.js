import Ember from 'ember';

const supportedTypes = ['bar', 'bar-horizontal', 'pie'];

export default Ember.Route.extend({

  queryParams: {'styleOverride': {refreshModel: true}},

  model: function(params) {
    /* jshint quotmark: false */
    const slug = params.slug;
    let groupByField = 'Type';
    let reverseXY = false;
    if (slug === 'bar-horizontal') {
      groupByField = 'Zip';
      reverseXY = true;
    }
    let dataset, override;
    let title = `${params.slug} Example`;
    const tooltip = {
      "title": "{" + groupByField +"}",
      "content": "{Number_of_SUM} Students in {" + groupByField + "}"
    };
    if (supportedTypes.indexOf(slug) > -1) {
      dataset = {
        "url": "https://services.arcgis.com/uDTUpUPbk8X8mXwl/arcgis/rest/services/Public_Schools_in_Onondaga_County/FeatureServer/0",
        "query": {
          "groupByFieldsForStatistics": groupByField,
          "outStatistics": [{
            "statisticType": "sum",
            "onStatisticField": "Number_of",
            "outStatisticFieldName": "Number_of_SUM"
          }]
        },
        "mappings": {
          "sort": "Number_of_SUM DESC",
          "x": {
            "field": groupByField,
            "label": groupByField
          },
          "y": {
            "field": "Number_of_SUM",
            "label": "Total Students"
          }
        }
      };
      if (reverseXY) {
        let tempX = dataset.mappings.x;
        dataset.mappings.x = dataset.mappings.y;
        dataset.mappings.y = tempX;
      }
      // pie chart
      if (slug === 'pie') {
        // add radius
        dataset.mappings.radius = 240;
        // replace x w/ label
        delete dataset.mappings.x;
        dataset.mappings.label = {
          field: groupByField,
          label: groupByField
        };
      }

      if (params.styleOverride === 'yes') {
        override = {
          marks: [
            {properties:
              {
                hover: {fill: {value: '#17a086'}},
                update: {fill: {value: '#7fcdbb'}}
              }
            }
          ]
        };
      }
    } else {
      title = `Type "${params.slug}" Not Suppoprted.`;
    }
    return {
      title: title,
      type: slug,
      dataset,
      tooltip,
      override
    };
  }
});
