/* globals Cedar:false */
import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  specification: null,
  options: null,

  // if spec and options attr are valid
  // show chart at elememt
  _showChart() {
    const specification = this.get('specification');
    if (!specification) {
      return;
    }
    const options = this.get('options');
    if (!options) {
      return;
    }

    // generate element id
    options.elementId = '#cedar-chart-' + options.id;

    // create the chart
    var chart = new Cedar(specification);

    // attach the chart to the DOM
    chart.show(options);
  },

  // if attr set, show the chart once inserted in the DOM
  didInsertElement() {
    this._showChart();
  },

  // update chart when spec changes
  specificationDidChange: Ember.observer('specification', function(/*sender, propKey*/) {
    this._showChart();
  })

});
