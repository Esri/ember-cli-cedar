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

  eventLog: '',

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
        const eventType = e ? e.type : 'No event object passed';
        this.set('eventLog', this.get('eventLog') + `${eventType}: ${JSON.stringify(data)}\n`);
      }
    }
  }
});
