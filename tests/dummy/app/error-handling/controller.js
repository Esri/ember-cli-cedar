import Ember from 'ember';

export default Ember.Controller.extend({
  invalidUrlDataset: Ember.computed('model.datasets', function() {
    // deep clone the dataset
    const datasetsCopy = Ember.copy(this.get('model.datasets'), true);
    datasetsCopy[0].url = 'thisisnotavalidurl';
    return datasetsCopy;
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
