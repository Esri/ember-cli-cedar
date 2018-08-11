import fetch from 'fetch';
import cedar from 'cedar';

export function initialize(/* appInstance */) {
  if (cedar.config) {
    // configure cedar to pass ember-fetch to @esri/arcgis-rest-js functions
    cedar.config.fetch = fetch;
  }
}

export default {
  initialize
};
