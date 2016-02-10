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

    // use elementId from component to render Cedar directly into div
    options.elementId = '#' + this.elementId;

    // create the chart
    var chart = new Cedar(specification);

    // attach the chart to the DOM
    chart.show(options);

    // look for overrides & apply
    if (options.override) {
      chart.override = options.override;
    }
  },

  // if attr set, show the chart once inserted in the DOM
  didInsertElement() {
    this._showChart();
  },

  // update chart when spec changes
  specificationDidChange: Ember.observer('specification', function(/*sender, propKey*/) {
    this._showChart();
  }),

  optionsDidChange: Ember.observer('options', function(/*sender, propKey*/) {
    this._showChart();
  }),

  overrideDidChange: Ember.observer('override', function(/*sender, propKey*/) {
    this._showChart();
  })
});

