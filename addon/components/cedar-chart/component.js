/* globals Cedar:false */
import Ember from 'ember';

// test if an object is empty ({})
function isEmptyObject (obj) {
  return obj && obj.constructor === Object && Object.keys(obj).length === 0;
}

export default Ember.Component.extend({
  // show chart at root DOM elememt of this component
  _showChart() {
    if (this.isDestroyed || this.isDestroying) {
      return;
    }

    // destroy existing chart if any
    this._destroyChart();

    // create and show the chart
    try {
      // get chart constructor options from properties and create the chart
      const props = this.getProperties('type', 'dataset', 'datasets', 'series', 'specification', 'tooltip', 'override', 'transform', 'timeout');
      this.chart = new Cedar(props);

      // wire up event handlers
      const supportedEvents = ['Click', 'Mouseover', 'Mouseout', 'Mousemove', 'UpdateStart', 'UpdateEnd'];
      supportedEvents.forEach(eventName => {
        const attrName = `on${eventName}`;
        if (typeof this[attrName] === 'function') {
          const cedarEventName = eventName.toLowerCase().replace('update', 'update-');
          this.chart.on(cedarEventName, this[attrName]);
        }
      });

      // get render options from properties but use elementId from component
      const options = this.get('options') || {};
      options.elementId = '#' + this.elementId;

      // autolabels will throw an error on pie charts
      // see https://github.com/Esri/cedar/issues/173
      if (this.chart.type === 'pie') {
        options.autolabels = false;
      }

      // attach the chart to the DOM
      this.chart.show(options, err => {
        if (err) {
          // an error occurred while fetching data
          this._handleErr(err);
        }
      });
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

  _deprecate (oldKey, newPropertyName, oldContext) {
    const oldPropertyName = oldContext ? oldContext + '.' + oldKey : oldKey;
    const oldPropertyValue = this.get(oldPropertyName);
    if (oldPropertyValue) {
      this.set(newPropertyName, oldPropertyValue);
      if (oldContext) {
        delete this.get(oldContext)[oldKey];
      } else {
        delete this[oldPropertyName];
      }
      this._showDeprecationWarning(oldPropertyName, newPropertyName);
    }
  },

  // emulate Ember deprecation console warnings
  // for nested properties, etc that we can't use deprecatingAlias for
  _showDeprecationWarning (oldPropertyName, newPropertyName) {
    console.warn('DEPRECATION: Usage of `' + oldPropertyName + '` is deprecated, use `' + newPropertyName + '` instead.');
  },

  didReceiveAttrs (e) {
    this._super(...arguments);
    // now we call an error handler instead of showing a static message
    // when there are chart errors
    if (e.newAttrs.invalidSpecMessage) {
      this._showDeprecationWarning('invalidSpecMessage', 'onError');
    }

    // in ember-cli-cedar <= v0.5.0 Cedar constructor options
    // were passed in via the specification property
    // need to pull those out into own properties and show deprecation warning
    this._deprecate('type', 'type', 'specification');
    this._deprecate('dataset', 'dataset', 'specification');
    this._deprecate('tooltip', 'tooltip', 'specification');
    this._deprecate('timeout', 'timeout', 'specification');
    this._deprecate('override', 'override', 'specification');
    if (isEmptyObject(this.get('specification'))) {
      delete this.specification;
    }

    // at one point in the distant past we sent in override via options
    this._deprecate('override', 'override', 'options');

    // re-create and show chart whenever attributes change
    Ember.run.scheduleOnce('afterRender', this, '_showChart');
  },

  willDestroyElement () {
    this._destroyChart();
  }
});
