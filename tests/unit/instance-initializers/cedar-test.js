import Application from '@ember/application';
import { run } from '@ember/runloop';
import { initialize } from 'dummy/instance-initializers/cedar';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';
import fetch from 'fetch';
import cedar from 'cedar';

module('Unit | Instance Initializer | cedar', {
  beforeEach() {
    run(() => {
      this.application = Application.create();
      this.appInstance = this.application.buildInstance();
    });
  },
  afterEach() {
    run(this.appInstance, 'destroy');
    destroyApp(this.application);
  }
});

// Replace this with your real tests.
test('it should configure cedar to use ember-fetch', function(assert) {
  initialize(this.appInstance);

  if (cedar.config) {
    assert.equal(cedar.config.fetch, fetch, 'should have set fetch');
  } else {
    assert.equal(cedar.config, undefined, 'should not have set fetch');
  }
});
