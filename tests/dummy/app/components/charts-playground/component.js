import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,

  jsonString: Ember.computed('model', function() {
    return JSON.stringify(this.get('model'), undefined, 2);
  }),
  actions: {
    renderJSON: function() {
      this.set('model', JSON.parse(this.get('jsonString')));
    }
  }
});
