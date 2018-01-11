import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout: layout,

  jsonString: computed('model', function() {
    return JSON.stringify(this.get('model'), undefined, 2);
  }),
  actions: {
    renderJSON: function() {
      this.set('model', JSON.parse(this.get('jsonString')));
    }
  }
});
