import { copy } from '@ember/object/internals';
import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  invalidUrlDataset: computed('model.datasets', function() {
    // deep clone the dataset
    const datasetsCopy = copy(this.get('model.datasets'), true);
    datasetsCopy[0].url = 'thisisnotavalidurl';
    return datasetsCopy;
  }),
  emptyDataset: null,
  init() {
    this._super(...arguments);
    this.set('emptyDataset', {});
  },
  actions: {
    showError (err) {
      this.set('errorMessage', err);
    },
    showError2 (err) {
      this.set('errorMessage2', err);
    }
  }
});
