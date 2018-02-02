/* global fetchMock */
import { moduleForComponent, test } from 'ember-qunit';
import { later } from '@ember/runloop';
import { Promise } from 'rsvp';
import hbs from 'htmlbars-inline-precompile';
import { bar } from '../../../mock/definitions';
import { schoolsResponse } from '../../../mock/responses';

moduleForComponent('cedar-chart', 'Integration | Component | cedar chart', {
  integration: true,
  afterEach () {
    fetchMock.restore();
  }
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

  this.set('definition', bar);
  this.on('updateEnd', function() {
    assert.equal(this.$('.amcharts-main-div').length, 1, 'chart was rendered');
    done();
  });
  // mock feature service response
  fetchMock.post(`begin:${bar.datasets[0].url}`, schoolsResponse);
  this.render(hbs `{{cedar-chart definition=definition onUpdateEnd=(action 'updateEnd')}}`);
});

test('It throws an error if no response before timeout', function (assert) {
  let done = assert.async();
  // we expect a timeout error w/in 100ms
  assert.timeout(300);

  this.setProperties({
    definition: bar,
    // should error after 100ms
    timeout: 100
  });
  this.on('onError', function(err) {
    const msg = err.message || err;
    assert.equal(msg, 'The queries to the service(s) are not responding within the designated timeout period.', 'chart timed out');
    done();
  });
  // mock feature service response after 200ms
  fetchMock.post(`begin:${bar.datasets[0].url}`, function () {
    return new Promise((resolve) => {
      later(resolve, schoolsResponse, 200);
    });
  });
  this.render(hbs `{{cedar-chart definition=definition timeout=timeout onError=(action 'onError')}}`);
});
