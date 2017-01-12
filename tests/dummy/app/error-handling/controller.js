import Ember from 'ember';

export default Ember.Controller.extend({
  invalidUrlDataset: Ember.computed('model.dataset', function() {
    // deep clone the dataset
    const datasetCopy = Ember.copy(this.get('model.dataset'), true);
    datasetCopy.url = 'thisisnotavalidurl';
    return datasetCopy;
  }),
  emptyDataset: {},
  actions: {
    showError (err) {
      this.set('errorMessage', err);
    },
    showError2 (err) {
      this.set('errorMessage2', err);
    }
  }
});
