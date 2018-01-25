import { copy } from '@ember/object/internals';
import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  timeout: 10,

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
    },
    showError3 (err) {
      if (err === 'The queries to the service(s) are not responding within the designated timeout period.') {
        this.set('errorMessage3', `${err}: There was a timeout based on ${this.get('timeout')} ms`);
      } else {
        this.set('errorMessage3', err);
      }
    }
  }
});
