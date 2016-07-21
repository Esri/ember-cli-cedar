import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,

  tagName: 'div',
  classNames: [],

  specificationString: Ember.computed('model', 'model.specification', function() {
    return JSON.stringify(this.get('model.specification'));
  }),
  actions: {
    renderJSON: function() {
      this.set('model.specification', JSON.parse(this.get('specificationString')));
    }
  }
});
