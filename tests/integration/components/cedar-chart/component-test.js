import { module } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';
import { render, find } from '@ember/test-helpers';
import { later } from '@ember/runloop';
import { Promise, resolve } from 'rsvp';
import hbs from 'htmlbars-inline-precompile';
import { bar } from '../../../mock/definitions';
import { schoolsResponse } from '../../../mock/responses';
import cedar from '@esri/cedar';
import Service from '@ember/service';

module('cedar-chart', 'Integration | Component | cedar chart', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    // we're not really going to lazy-load amCharts
    // so we mock the cedar loader service
    this.owner.register('service:cedar-loader', Service.extend({
      loadDependencies() {
        return resolve();
      }
    }));
  });

  test('it renders with no props set', async function(assert) {
    assert.expect(2);

    await render(hbs`{{cedar-chart}}`)
    assert.equal(find('*').textContent.trim(), '');

    // Template block usage:" + EOL +
    await render(hbs`
      {{#cedar-chart}}
        template block text
      {{/cedar-chart}}
    `)
    assert.equal(find('.cedar-chart').textContent.trim(), 'template block text');
  });

  test('it queries, updates, and renders the data', async function (assert) {
    assert.expect(4);
    // stub cedar instance methods so that features are not queried
    // and non-existent AmCharts methods are not invoked
    const queryStub = this.stub(cedar.Chart.prototype, 'query').resolves({
      Number_of_SUM: schoolsResponse
    });
    const renderStub = this.stub(cedar.Chart.prototype, 'render');
    const updateDataSpy = this.spy(cedar.Chart.prototype, 'updateData');
    this.set('definition', bar);
    this.set('updateEnd', function() {
      assert.equal(queryStub.callCount, 1, 'it should have called query exactly once');
      assert.equal(updateDataSpy.callCount, 1, 'it should have called updateData exactly once');
      assert.equal(renderStub.callCount, 1, 'it should have called render exactly once');
      assert.deepEqual(updateDataSpy.getCall(0).args[0].Number_of_SUM, schoolsResponse, 'it should pass the query response to updateData');
    });
    await render(hbs `{{cedar-chart definition=definition onUpdateEnd=(action updateEnd)}}`);
  });

  test('It throws an error if no response before timeout', async function (assert) {
    assert.expect(1);
    // we expect a timeout error w/in 100ms
    assert.timeout(300);

    // stub cedar query to return after 200ms
    this.stub(cedar.Chart.prototype, 'query').callsFake(function () {
      return new Promise((resolve) => {
        later(resolve, { Number_of_SUM: schoolsResponse }, 200);
      });
    });

    // configure the component to throw an error if the query takes more than 100ms
    // and verify that the error handler was called
    this.setProperties({
      definition: bar,
      timeout: 100
    });
    this.set('onError', function(err) {
      const msg = err.message || err;
      assert.equal(msg, 'The queries to the service(s) are not responding within the designated timeout period.', 'chart timed out');
    });
    await render(hbs `{{cedar-chart definition=definition timeout=timeout onError=(action onError)}}`);
  });
});
