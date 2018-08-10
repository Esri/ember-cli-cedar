import Service from '@ember/service';
import { getOwner } from '@ember/application';
import { resolve } from 'rsvp';
import cedar from 'cedar';
import { loadAmChartsFiles } from '../utils/lazy-loading'

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
      // get the base path where amCharts resources are locates
      // NOTE: the amCharts path is set in contentFor('head')
      const path = window && window.AmCharts_path;

      // get required resources from config
      const ENV = getOwner(this).resolveRegistration('config:environment');
      const imports = ENV && ENV.cedar && ENV.cedar.amCharts && ENV.cedar.amCharts.imports;
      // TODO: what to do if no imports? resolve? reject?

      // load all the amCharts resources, but only once
      // and then return the cedar namespace
      this._loadAmChartsPromise = loadAmChartsFiles(path, imports.concat())
      .then(() => cedar);
      return this._loadAmChartsPromise;
    }
  }
});
