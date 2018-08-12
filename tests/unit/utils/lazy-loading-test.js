import { module } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';
import { loadAmChartsFiles } from 'dummy/utils/lazy-loading';

module('Unit | Utility | lazy loading');

const baseUrl = 'https://fake.host.com/path/to/amcharts';
const dependencies  = ['amcharts.js', 'serial.js', 'plugins/export/export.css'];

test('loadAmChartsFiles w/ no files', function(assert) {
  return loadAmChartsFiles()
  .catch(e => {
    assert.equal(e.message, 'You must supply the AmCharts dependencies you wish to lazy load');
  });
});

test('loadAmChartsFiles w/ a script and stylesheet', function(assert) {
  // don't actually append script/link nodes to the dom to avoid loading them
  const appendChildStub = this.stub(document.head, 'appendChild').callsFake(el => {
    // trigger the onload event to simulate the script/link having loaded
    el.onload();
  });
  return loadAmChartsFiles(dependencies, baseUrl)
  .then(() => {
    assert.equal(appendChildStub.callCount, 3, 'should have attempted to load 3 resources');
    const amChartsScript = appendChildStub.getCall(0).args[0];
    assert.equal(amChartsScript.src, `${baseUrl}/amcharts.js`, 'amcharts script should have the correct URL');
    const serialScript = appendChildStub.getCall(1).args[0];
    assert.equal(serialScript.src, `${baseUrl}/serial.js`, 'serial script should have the correct URL');
    const exportLink = appendChildStub.getCall(2).args[0];
    assert.equal(exportLink.href, `${baseUrl}/plugins/export/export.css`, 'export link should have the correct URL');
    assert.equal(exportLink.rel, 'stylesheet', 'export link should have the correct rel');
    assert.equal(exportLink.type, 'text/css', 'export link should have the correct type');
  });
});
