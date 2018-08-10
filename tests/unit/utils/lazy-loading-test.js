import { loadAmChartsFiles } from 'dummy/utils/lazy-loading';
import { module, test } from 'qunit';

module('Unit | Utility | lazy loading');

test('loadAmChartsFiles w/ no path', function(assert) {
  return loadAmChartsFiles()
  .catch(e => {
    assert.ok(e.message = 'You must set AmCharts_path global in order to lazy-load AmCharts');
  });
});

// TODO: stub document.createElement() and document.head.appendChild()
// and test w/ a script and stylesheet
