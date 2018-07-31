'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
    cedar: {
      amCharts: {
        // publicPath: amCharts will be included at this path in the public folder
        // use this if you are not loading amCharts from the CDN
        // i.e. and are either going to bundle amcharts into vendor.js (below)
        // or going to lazy-load amcharts from the public path (configure in enviroment.js)
        publicPath: 'amcharts',
        // imports: an array of amcharts files to be imported (bundled) in vendor files
        // this dummy app lazy-loads amcharts based on the environment config instead
        // but if you wanted to bundle amcharts into vendor.js you would uncomment the following
        // imports: [
        //   // amCharts base lib, this one is required
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
