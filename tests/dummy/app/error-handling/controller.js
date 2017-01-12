import Ember from 'ember';

export default Ember.Controller.extend({
  options: {
    width: 600,
    height: 600,
    autolabels: false
  },
  modelInvalidUrl: Ember.computed('model', function() {
    // deep clone the model
    const modelCopy = Ember.copy(this.get('model'), true);
    modelCopy.dataset.url = 'thisisnotavalidurl';
    return modelCopy;
  }),
  invalidSpecifiction: {},
  actions: {
    showError (err) {
      this.set('errorMessage', err);
    },
    showError2 (err) {
      this.set('errorMessage2', err);
    }
  }
});
