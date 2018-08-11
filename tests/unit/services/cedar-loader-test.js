import { moduleFor } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';
import environment from 'dummy/config/environment';
import { all } from 'rsvp';
import * as lazyLoading from 'ember-cli-cedar/utils/lazy-loading';

moduleFor('service:cedar-loader', 'Unit | Service | cedar loader', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
  beforeEach () {
    this.register('config:environment', environment);
  }
});

test('it doesn\'t load amCharts dependencies if already loaded', function(assert) {
  // don't actually load the files
  const loadAmChartsFilesStub = this.stub(lazyLoading, 'loadAmChartsFiles').resolves();

  // emulate AmCharts being loaded by setting the global
  window.AmCharts = {};
  let service = this.subject();
  return service.loadDependencies()
  .then(() => {
    assert.equal(loadAmChartsFilesStub.callCount, 0);
  })
  .finally(() => {
    // clean up
    delete window.AmCharts;
  })
});

test('it only loads amCharts dependencies once', function(assert) {
  // don't actually load the files
  const loadAmChartsFilesStub = this.stub(lazyLoading, 'loadAmChartsFiles').resolves();

  let service = this.subject();
  // emulate multiple simultaneous calls to loadDependencies
  // for example if multiple charts are on the page
  const loadDependenciesPromises = [
    service.loadDependencies(),
    service.loadDependencies(),
    service.loadDependencies()
  ];
  return all(loadDependenciesPromises)
  .then(() => {
    assert.equal(loadAmChartsFilesStub.callCount, 1);
  });
});
