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
        // baseUrl: the base URL to use for any relative dependencies below
        // if baseUrl is not defined then it will use window.AmCharts_path, which
        // is set in contentFor('head') when you specify a publicPath in ember-cli-build.js
        // and that is what we are relying on in this case
        // alternatively, we could have loaded amCharts from their CDN, by setting:
        // baseUrl: 'https://www.amcharts.com/lib/3'
        // dependencies - the amCharts resources that your application needs
        // these will be lazy-loaded the first that the application either
        // - renders a {{cedar-chart}} component
        // - calls this.get('cedarLoader').loadDependencies()
        dependencies: [
          // amCharts base lib, this one is required and MUST be the first element in the array
          'amcharts.js',
          // you will likely need at least one of the following:
          'serial.js', // bar and line charts
          'xy.js', // scatter charts
          'pie.js', // pie and donut charts
          'radar.js', // radar charts
          // you will also likely need a theme to style charts, in this case
          // we load the calcite them that gets copied into the local amCharts themes folder
          'themes/calcite.js',
          // if we had specified a CDN as the baseUrl above, we'd need to use
          // 'https://unpkg.com/@esri/cedar@1.0.0-beta.9/dist/umd/themes/amCharts/calcite.js',
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
