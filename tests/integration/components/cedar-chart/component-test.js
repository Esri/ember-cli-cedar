/* global fetchMock */
import { moduleForComponent } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';
import { later } from '@ember/runloop';
import { Promise, resolve } from 'rsvp';
import hbs from 'htmlbars-inline-precompile';
import { bar } from '../../../mock/definitions';
import { schoolsResponse } from '../../../mock/responses';
import cedar from 'cedar';
import Service from '@ember/service';

moduleForComponent('cedar-chart', 'Integration | Component | cedar chart', {
  integration: true,
  beforeEach () {
    // we're not really going to lazy-load amCharts
    // so we mock the cedar loader service
    this.register('service:cedar-loader', Service.extend({
      loadDependencies() {
        return resolve();
      }
    }));
  },
  afterEach () {
    // clean up
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

test('it queries, updates, and renders the data', function (assert) {
  let done = assert.async();

  // stub render so that non-existent AmCharts methods are not invoked
  const renderStub = this.stub(cedar.Chart.prototype, 'render');
  const updateDataSpy = this.spy(cedar.Chart.prototype, 'updateData');
  this.set('definition', bar);
  this.on('updateEnd', function() {
    // assert.equal(this.$('.amcharts-main-div').length, 1, 'chart was rendered');
    assert.equal(updateDataSpy.callCount, 1, 'it should have called updateData exactly once');
    assert.equal(renderStub.callCount, 1, 'it should have called render exactly once');
    assert.deepEqual(updateDataSpy.getCall(0).args[0].Number_of_SUM, schoolsResponse, 'it should pass the query response to updateData');
    done();
  });
  // mock feature service response
  fetchMock.get(`begin:${bar.datasets[0].url}`, schoolsResponse);
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
  fetchMock.get(`begin:${bar.datasets[0].url}`, function () {
    return new Promise((resolve) => {
      later(resolve, schoolsResponse, 200);
    });
  });
  this.render(hbs `{{cedar-chart definition=definition timeout=timeout onError=(action 'onError')}}`);
});
