import { scheduleOnce } from '@ember/runloop';
import { tryInvoke } from '@ember/utils';
import Component from '@ember/component';
import cedar from 'cedar';

export default Component.extend({
  classNames: ['cedar-chart'],

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
      // TODO: tooltip as property
      const supportedProps = ['type', 'datasets', 'series', 'overrides'];
      const props = this.getProperties(supportedProps);
      const definition = this.getWithDefault('definition', {});

      // Iterate over properties
      for (let prop in props) {
        // if the value contained in the prop is not undefined
        if (props.hasOwnProperty(prop) && props[prop] !== undefined) {
          // override the definition val with the prop val
          definition[prop] = props[prop];
        }
      }

      // create the chart and attach it to the dom
      this.chart = new cedar.Chart(this.elementId, definition);

      // TODO: events aren't supported yet
      // wire up event handlers
      // const supportedEvents = ['Click', 'Mouseover', 'Mouseout', 'Mousemove', 'UpdateStart', 'UpdateEnd'];
      // supportedEvents.forEach(eventName => {
      //   const attrName = `on${eventName}`;
      //   if (typeof this[attrName] === 'function') {
      //     const cedarEventName = eventName.toLowerCase().replace('update', 'update-');
      //     this.chart.on(cedarEventName, this[attrName]);
      //   }
      // });

      // TODO: show options aren't supported yet (are they even needed?)
      // get render options from properties but use elementId from component
      // const options = this.get('options') || {};
      // options.elementId = '#' + this.elementId;

      // autolabels will throw an error on pie charts
      // see https://github.com/Esri/cedar/issues/173
      // if (this.chart.type === 'pie') {
      //   options.autolabels = false;
      // }

      // show the chart
      tryInvoke(this, 'onUpdateStart');
      this.chart.query()
      .then(response => {
        const transform = this.get('transform');
        if (transform) {
          // call transform closure action on each response
          for (const datasetName in response) {
            if (response.hasOwnProperty(datasetName)) {
              const dataset = this.chart.dataset(datasetName);
              response[datasetName] = transform(response[datasetName], dataset);
            }
          }
        }
        tryInvoke(this, 'onUpdateEnd');
        return this.chart.updateData(response).render();
      })
      .catch(err => {
        // an error occurred while fetching or rendering data or
        this._handleErr(err);
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
      // TODO: remove events once they're implemented
      // if (this.chart.off) {
      //   this.chart.off();
      // }
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

  didReceiveAttrs () {
    this._super(...arguments);

    // re-create and show chart whenever attributes change
    scheduleOnce('afterRender', this, '_showChart');
  },

  willDestroyElement () {
    this._destroyChart();
  }
});
