import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['styleOverride'],
  styleOverride: null,

  renderers: [
    'canvas',
    'svg'
  ],

  selectedRenderer: 'svg',

  chartOptions: Ember.computed('selectedRenderer', function() {
    return {
      autolabels: true,
      renderer: this.get('selectedRenderer')
    };
  }),

  actions: {
    selectRenderer: function(newRenderer) {
      this.set('selectedRenderer', newRenderer);
    }
  }
});
