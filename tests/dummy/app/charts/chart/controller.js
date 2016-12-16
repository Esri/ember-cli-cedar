import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['styleOverride'],
  styleOverride: null,

  renderers: [
    'canvas',
    'svg'
  ],

  selectedRenderer: 'svg',

  shouldLogEvents: false,

  chartOptions: Ember.computed('selectedRenderer', function() {
    return {
      autolabels: true,
      renderer: this.get('selectedRenderer')
    };
  }),

  actions: {
    selectRenderer: function(newRenderer) {
      this.set('selectedRenderer', newRenderer);
    },
    logEvent (e, data) {
      if (this.shouldLogEvents) {
        console.log(e ? e.type : 'No event object passed', data);
      }
    }
  }
});
