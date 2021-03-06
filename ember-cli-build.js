'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    'ember-cli-babel': {
      // NOTE: this is only included b/c I couldn't get async/await to work in tests
      includePolyfill: true
    },
    // Add options here
    cedar: {
      amCharts: {
        // publicPath - amCharts will be served from this path in the public folder
        // use this if you are importing amCharts into vendor js/css files
        // or if you want to lazy-load the locally served amCharts scripts/styles
        // instead of lazy-load scripts/styles from a CDN
        publicPath: 'amcharts',
        // imports - import amCharts files into vendor.js and vendor.css files
        // instead of lazy-loading them (which is configured in config/enviroment.js)
        // NOTE: paths are relative to node_modules/amcharts3/amcharts
        // imports: [
        //   // amCharts base lib, this one is required and MUST be the first element in the array
        //   'amcharts.js',
        //   // you will likely need at least one of the following:
        //   'serial.js', // bar and line charts
        //   'xy.js', // scatter charts
        //   'pie.js', // pie and donut charts
        //   'radar.js', // radar charts
        //   // you will also likely need a theme to style charts
        //   'themes/calcite.js',
        //   // plugins are complely optioinal
        //   // this one adds a download button on the chart
        //   'plugins/export/export.js',
        //   'plugins/export/export.css'
        // ]
      }
    },
    // amCharts uses hardcoded paths to assets (like images and plugin files)
    // so you will need to make sure those don't get fingerprinted
    fingerprint: {
      // NOTE: this needs to be the same as publicPath above
      exclude: ['amcharts']
    }
  });

  return app.toTree();
};
