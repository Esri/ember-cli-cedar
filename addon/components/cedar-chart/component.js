import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  settings: null,

  didInsertElement() {

    // grab the incoming model
    let specification = this.get('specification');
    let options = this.get('options');
    options.elementId = '#cedar-chart-' + options.id;

    // TODO: check for token and append to Query object if needed

    // create the chart
    var chart = new Cedar(specification);

    // attach the chart to the DOM
    chart.show(options);
  }
});
