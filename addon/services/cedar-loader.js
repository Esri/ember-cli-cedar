import Service from '@ember/service';
import { getOwner } from '@ember/application';
import { resolve } from 'rsvp';
import cedar from '@esri/cedar';
import { loadAmChartsFiles } from 'ember-cli-cedar/utils/lazy-loading';

export default Service.extend({
  loadDependencies() {
    if (window.AmCharts) {
      // at least amCharts dependency is loaded
      // for now, we assume that means that they all are
      // TODO: check if all other imports are loaded too,
      // and only load the ones that are missing?
      return resolve(cedar);
    } else {
      if (this._loadAmChartsPromise) {
        // already loading or loaded, return the existing promise
        return this._loadAmChartsPromise;
      }
      // get required resources from config
      const ENV = getOwner(this).resolveRegistration('config:environment');
      const amChartsConfig = (ENV && ENV.cedar && ENV.cedar.amCharts) || {};

      // get the base url where amCharts resources are located
      const baseUrl = amChartsConfig.baseUrl ? amChartsConfig.baseUrl : window && window.AmCharts_path;

      // load all the amCharts resources, but only once
      // and then return the cedar namespace
      this._loadAmChartsPromise = loadAmChartsFiles(amChartsConfig.dependencies, baseUrl)
      .then(() => cedar);
      return this._loadAmChartsPromise;
    }
  }
});
