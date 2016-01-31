import Ember from 'ember';

const supportedTypes = ['bar', 'bar-horizontal'];

export default Ember.Route.extend({
  model: function(params) {
    /* jshint quotmark: false */
    const slug = params.slug;
    let groupByField = 'Type';
    let reverseXY = false;
    if (params.slug === 'bar-horizontal') {
      groupByField = 'Zip';
      reverseXY = true;
    }
    let specification;
    let options = {
      autolabels: true,
      renderer: 'svg',
      id: 'chart1'
    };
    let title = `${params.slug} Example`;
    if (supportedTypes.indexOf(slug) > -1) {
      specification = {
        "type": params.slug,
        "dataset": {
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
        },
        "tooltip": {
          "title": "{" + groupByField +"}",
          "content": "{Number_of_SUM} Students in {" + groupByField + "}"
        }
      };
      if (reverseXY) {
        let tempX = specification.dataset.mappings.x;
        specification.dataset.mappings.x = specification.dataset.mappings.y;
        specification.dataset.mappings.y = tempX;
      }
    } else {
      title = `Type "${params.slug}" Not Suppoprted.`
    }
    return {
      specification: specification,
      options: options,
      title: title
    };
  }
});
