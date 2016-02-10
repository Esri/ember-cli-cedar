import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['styleOverride'],
  styleOverride: null,

  chartOptions: {
    autolabels: true,
    renderer: 'svg'
  },
  renderers: [
    'canvas',
    'svg'
  ],
  selectedRenderer: Ember.computed('chartOptions', function() {
    return this.get('chartOptions.renderer');
  }),
  actions: {
    selectRenderer: function(newRenderer) {
      this.set('chartOptions', {
        autolabels: true,
        renderer: newRenderer
      });
    }
  }
});
