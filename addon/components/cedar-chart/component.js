import { scheduleOnce, later } from '@ember/runloop';
import { tryInvoke } from '@ember/utils';
import Component from '@ember/component';
import cedar from 'cedar';
import { Promise } from 'rsvp';
import { inject as service } from '@ember/service';

// TODO: move this to utils
// reject with an error after so many milliseconds
function rejectAfter (milliseconds, errorMessage) {
  return new Promise((resolve, reject) => {
    later(reject, new Error(errorMessage), milliseconds);
  });
}

export default Component.extend({
  classNames: ['cedar-chart'],

  cedarLoader: service(),

  timeoutErrorMessage: 'The queries to the service(s) are not responding within the designated timeout period.',

  // show chart at root DOM element of this component
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
      const supportedProps = ['type', 'datasets', 'series', 'overrides', 'legend', 'style'];
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
      if (Object.keys(definition).length === 0) {
        // no properties have been set
        return;
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
    } catch (err) {
      // an error occurred while creating the cart
      this._handleErr(err);
      return;
    }

    // ensure cedar dependencies are loaded before rendering the chart
    this.get('cedarLoader').loadDependencies().then(() => {
      // query the data and show the chart
      tryInvoke(this, 'onUpdateStart');
      const timeout = this.get('timeout');
      let queryPromise;
      if (timeout) {
        // reject if the query results don't return before the timeout
        const timeoutPromise = rejectAfter(timeout, this.get('timeoutErrorMessage'));
        queryPromise = Promise.race([timeoutPromise, this.chart.query()]);
      } else {
        queryPromise = this.chart.query();
      }
      return queryPromise.then(response => {
        if (this.get('isDestroyed') || this.get('isDestroying')) {
          return;
        }
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
        // render the chart
        this.chart.updateData(response).render();
        tryInvoke(this, 'onUpdateEnd');
        return this.chart;
      });
    }).catch(err => {
      // an error occurred while loading dependencies
      // or fetching, transforming or rendering data
      this._handleErr(err);
    });
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
