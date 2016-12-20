/* globals Cedar:false */
import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,

  invalidSpecMessage: 'Invalid Cedar Specification',

  // if in DOM and spec and options are valid
  // show chart at elememt
  _showChart() {
    try {
      if (this.isDestroyed || this.isDestroying) {
        return;
      }
      const spec = this.get('specification');
      if (!spec) {
        return;
      }
      // Copy spec so that we don't mutate this.get('specification')
      // Re-evaluate once we resolve https://github.com/Esri/cedar/issues/211 in cedar
      const specification = Ember.$.extend(true, {}, spec);
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
      this.chart = new Cedar(specification);

      // wire up event handlers
      const supportedEvents = ['Click', 'Mouseover', 'Mouseout', 'Mousemove', 'UpdateStart', 'UpdateEnd'];
      supportedEvents.forEach(eventName => {
        const attrName = `on${eventName}`;
        if (typeof this[attrName] === 'function') {
          const cedarEventName = eventName.toLowerCase().replace('update', 'update-');
          this.chart.on(cedarEventName, this[attrName]);
        }
      });

      // attach the chart to the DOM
      this.chart.show(options);

      // look for overrides & apply
      if (override) {
        this.chart.override = override;
      }
    }
    catch(err) {
      this.$().text(this.get('invalidSpecMessage'));
    }
  },

  // show/update chart whenever attributes change
  didReceiveAttrs() {
    Ember.run.schedule('afterRender', this, '_showChart');
  },

  willDestroyElement () {
    if (this.chart && this.chart.off) {
      // remove any event handlers
      this.chart.off();
    }
  }
});
