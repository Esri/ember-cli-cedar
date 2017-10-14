import Ember from 'ember';

export default Ember.Controller.extend({
  slugs: [
    'bar',
    'bar-grouped',
    'bar-stacked',
    'horizontal',
    'line',
    'area',
    'scatter',
    'bubble',
    'pie',
    'radar'
  ],
  chartTypes: Ember.computed.map('slugs', function(slug) {
    return {
      slug,
      label: Ember.String.capitalize(slug)
    };
  }),

  definitionString: Ember.computed('model.definition', function() {
    return JSON.stringify(this.get('model.definition'), null, 2);
  }),

  // TODO: renderer not yet supported by v1.x, remove?
  renderers: [
    'canvas',
    'svg'
  ],
  selectedRenderer: 'svg',

  shouldLogEvents: false,
  eventLog: '',

  // TODO: remove?
  // show options not yet supported in v1x, and may not be needed
  // chartOptions: Ember.computed('selectedRenderer', function() {
  //   return {
  //     autolabels: true,
  //     renderer: this.get('selectedRenderer')
  //   };
  // }),

  actions: {
    // TODO: renderer not yet supported by v1.x, remove?
    selectRenderer: function(newRenderer) {
      this.set('selectedRenderer', newRenderer);
    },
    logEvent (e, data) {
      if (this.shouldLogEvents) {
        const eventType = e ? e.type : 'No event object passed';
        this.set('eventLog', this.get('eventLog') + `${eventType}: ${JSON.stringify(data)}\n`);
      }
    }
  }
});
