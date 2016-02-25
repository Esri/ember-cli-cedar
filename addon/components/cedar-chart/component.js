/* globals Cedar:false */
import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  attributeBindings: ['style'],

  // if in DOM and spec and options are valid
  // show chart at elememt
  _showChart() {
    if (this.isDestroyed || this.isDestroying) {
      return;
    }
    const specification = this.get('specification');
    if (!specification) {
      return;
    }
    const options = this.get('options') || {};
    const override = this.get('override') || options.override;

    // use elementId from component to render Cedar directly into div
    options.elementId = '#' + this.elementId;

    // autolabels will throw an error on pie charts
    // see https://github.com/Esri/cedar/issues/173
    if (specification.type === 'pie') {
      options.autolabels = false;
    }

    // create the chart
    var chart = new Cedar(specification);

    // attach the chart to the DOM
    chart.show(options);

    // look for overrides & apply
    if (override) {
      chart.override = override;
    }
  },

  // update chart when spec changes
  specificationDidChange: Ember.on('init', Ember.observer('specification', function(/*sender, propKey*/) {
    Ember.run.scheduleOnce('afterRender', this, '_showChart');
  })),

  // update chart when options changes
  optionsDidChange: Ember.on('init', Ember.observer('options', function(/*sender, propKey*/) {
    Ember.run.scheduleOnce('afterRender', this, '_showChart');
  })),

  // update chart when overrides changes
  overrideDidChange: Ember.on('init', Ember.observer('override', function(/*sender, propKey*/) {
    Ember.run.scheduleOnce('afterRender', this, '_showChart');
  }))
});
