/* globals Cedar:false */
import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,

  // show chart at root DOM elememt of this component
  _showChart() {
    if (this.isDestroyed || this.isDestroying) {
      return;
    }

    // destroy existing chart if any
    this._destroyChart();

    // create and show the chart
    try {
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

      // wire up data transform function if any
      this.chart.transform = this.transform;

      // attach the chart to the DOM
      this.chart.show(options, err => {
        if (err) {
          // an error occurred while fetching data
          this._handleErr(err);
        }
      });

      // look for overrides & apply
      if (override) {
        this.chart.override = override;
      }
    }
    catch(err) {
      // an error occurred while creating the cart
      this._handleErr(err);
    }
  },

  // remove any event handlers and destroy the chart if it exists
  _destroyChart () {
    if (this.chart) {
      if (this.chart.off) {
        this.chart.off();
      }
      delete this.chart;
    }
  },

  // call error handling action or re-throw error
  _handleErr (err) {
    const onErrorAction= this.get('onError');
    if (onErrorAction) {
      onErrorAction(err);
    } else {
      throw(err);
    }
  },

  didReceiveAttrs(e) {
    // now we call an error handler instead of showing a static message
    // when there are chart errors 
    if (e.newAttrs.invalidSpecMessage) {
      console.warn('DEPRECATION: Usage of `invalidSpecMessage` is deprecated, pass an action to `onError` instead.');
    }
    // re-create and show chart whenever attributes change
    Ember.run.scheduleOnce('afterRender', this, '_showChart');
  },

  willDestroyElement () {
    this._destroyChart();
  }
});
