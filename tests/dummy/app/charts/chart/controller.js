import { computed } from '@ember/object';
import { capitalize } from '@ember/string';
import { map } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
  slugs: null,
  chartTypes: map('slugs', function(slug) {
    return {
      slug,
      label: capitalize(slug)
    };
  }),

  definitionString: computed('model.definition', function() {
    return JSON.stringify(this.get('model.definition'), null, 2);
  }),

  // TODO: renderer not yet supported by v1.x, remove?
  renderers: null,
  selectedRenderer: 'svg',

  shouldLogEvents: false,
  eventLog: '',

  init() {
    this._super(...arguments);
    this.setProperties({
      slugs: [
        'bar',
        'bar-grouped',
        'bar-domain',
        'bar-stacked',
        'bar-horizontal',
        'line',
        'area',
        'scatter',
        'bubble',
        'pie',
        'radar'
      ],
      renderers: [
        'canvas',
        'svg'
      ]
    })
  },

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
