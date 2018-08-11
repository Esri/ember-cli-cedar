import { module } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';
import { loadAmChartsFiles } from 'dummy/utils/lazy-loading';

module('Unit | Utility | lazy loading');

const amChartsPath = 'https://fake.host.com/path/to/amcharts';
const fileNames  = ['amcharts.js', 'serial.js', 'plugins/export/export.css'];

test('loadAmChartsFiles w/ no path', function(assert) {
  return loadAmChartsFiles(undefined, fileNames)
  .catch(e => {
    assert.equal(e.message, 'You must supply the root path to AmCharts (typically the AmCharts_path global) in order to lazy-load AmCharts');
  });
});

test('loadAmChartsFiles w/ no files', function(assert) {
  return loadAmChartsFiles(amChartsPath)
  .catch(e => {
    assert.equal(e.message, 'You must supply the AmCharts files you wish to lazy load');
  });
});

test('loadAmChartsFiles w/ a script and stylesheet', function(assert) {
  // don't actually append script/link nodes to the dom to avoid loading them
  const appendChildStub = this.stub(document.head, 'appendChild').callsFake(el => {
    // trigger the onload event to simulate the script/link having loaded
    el.onload();
  });
  return loadAmChartsFiles(amChartsPath, fileNames)
  .then(() => {
    assert.equal(appendChildStub.callCount, 3, 'should have attempted to load 3 resources');
    const amChartsScript = appendChildStub.getCall(0).args[0];
    assert.equal(amChartsScript.src, `${amChartsPath}/amcharts.js`, 'amcharts script should have the correct URL');
    const serialScript = appendChildStub.getCall(1).args[0];
    assert.equal(serialScript.src, `${amChartsPath}/serial.js`, 'serial script should have the correct URL');
    const exportLink = appendChildStub.getCall(2).args[0];
    assert.equal(exportLink.href, `${amChartsPath}/plugins/export/export.css`, 'export link should have the correct URL');
    assert.equal(exportLink.rel, 'stylesheet', 'export link should have the correct rel');
    assert.equal(exportLink.type, 'text/css', 'export link should have the correct type');
  });
});
