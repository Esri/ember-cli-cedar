import Ember from 'ember';

export default Ember.Controller.extend({
  chartOptions: {
    autolabels: true,
    renderer: 'svg',
    id: 'chart1'
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
        renderer: newRenderer,
        id: 'chart1'
      });
    }
  }
});
