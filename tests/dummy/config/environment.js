/* jshint node: true */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'dummy',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      // cedar uses inline styles
      'style-src': "'self' 'unsafe-inline'",
      // connect to hosted arcigs servers
      'connect-src': '*'
    },
    cedar: {
      amCharts: {
        // imports - the amcharts resources that you need to use
        // NOTE: when lazy-loading paths are relative to window.AmCharts_path
        // but when bundling in vendor.js the paths are relative to
        // the package's dist folder in node_modules
        // either way the folder structure should be the same
        imports: [
          // amCharts base lib, this one is required and MUST be the first element in the array
          'amcharts.js',
          // you will likely need at least one of the following:
          'serial.js', // bar and line charts
          'xy.js', // scatter charts
          'pie.js', // pie and donut charts
          'radar.js', // radar charts
          // you will also likely need a theme to style charts
          'themes/calcite.js',
          // plugins are complely optioinal
          // this one adds a download button on the chart
          'plugins/export/export.js',
          'plugins/export/export.css'
        ]
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.locationType = 'hash';
    ENV.rootURL = '/ember-cli-cedar/';
  }

  return ENV;
};
