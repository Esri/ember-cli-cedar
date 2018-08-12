'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const publicPath = 'amcharts';

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
    cedar: {
      amCharts: {
        // publicPath - amCharts will be included at this path in the public folder
        // use this if you are NOT loading amCharts from the CDN
        // i.e. you are going to either lazy-load amcharts from window.AmCharts_path
        // or going to bundle amcharts into vendor.js
        publicPath: publicPath,
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
      exclude: [publicPath]
    }
  });

  return app.toTree();
};
