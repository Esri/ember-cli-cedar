import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cedar-chart', 'Integration | Component | cedar chart', {
  integration: true
});

test('it renders with no props set', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{cedar-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#cedar-chart}}
      template block text
    {{/cedar-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('It generates a chart properly', function (assert) {
  let done = assert.async();
  this.on('updateEnd', function () {
    assert.equal(this.$('.amcharts-main-div').length, 1, 'chart was rendered');
    done();
  });
  this.set('definition', {
    'type': 'bar',
    'datasets': [
      {
        'url': 'https://services.arcgis.com/uDTUpUPbk8X8mXwl/arcgis/rest/services/Public_Schools_in_Onondaga_County/FeatureServer/0',
        'name': 'Number_of_SUM',
        'query': {
          'orderByFields': 'Number_of_SUM DESC',
          'groupByFieldsForStatistics': 'Type',
          'outStatistics': [
            {
              'statisticType': 'sum',
              'onStatisticField': 'Number_of',
              'outStatisticFieldName': 'Number_of_SUM'
            }
          ]
        }
      }
    ],
    'series': [
      {
        'category': {'field': 'Type', 'label': 'Type'},
        'value': {'field': 'Number_of_SUM', 'label': 'Number of Students'},
        'source': 'Number_of_SUM'
      }
    ]
  });
  this.render(hbs`{{cedar-chart definition=definition onUpdateEnd=(action 'updateEnd')}}`);
});

test('It properly timesout', function (assert) {
  let done = assert.async();
  this.on('onError', function (err) {
    assert.equal(err, 'timeout', 'chart was rendered');
  });
  this.on('updateEnd', function () {
    assert.equal(this.$('.amcharts-main-div').length, 0, 'chart was rendered');
    done();
  });
  this.set('definition', {
    'type': 'bar',
    'datasets': [
      {
        'url': 'https://services.arcgis.com/uDTUpUPbk8X8mXwl/arcgis/rest/services/Public_Schools_in_Onondaga_County/FeatureServer/0',
        'name': 'Number_of_SUM',
        'query': {
          'orderByFields': 'Number_of_SUM DESC',
          'groupByFieldsForStatistics': 'Type',
          'outStatistics': [
            {
              'statisticType': 'sum',
              'onStatisticField': 'Number_of',
              'outStatisticFieldName': 'Number_of_SUM'
            }
          ]
        }
      }
    ],
    'series': [
      {
        'category': {'field': 'Type', 'label': 'Type'},
        'value': {'field': 'Number_of_SUM', 'label': 'Number of Students'},
        'source': 'Number_of_SUM'
      }
    ]
  });
  this.set('timeout', 2);
  this.render(hbs`{{cedar-chart definition=definition timeout=timeout onError=(action 'onError') onUpdateEnd=(action 'updateEnd')}}`);
});
