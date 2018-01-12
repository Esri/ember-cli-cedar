'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
    cedar: {
      amCharts: {
        // publicPath: amCharts will be included at this path in the public folder
        // use this if you are not loading amCharts from the CDN
        publicPath: 'amcharts',
        // imports: an array of amcharts files to be imported (bundled) in vendor files
        imports: [
          // amCharts base lib, this one is required
          'amcharts.js',
          // you will likely need at least one of the following:
          'serial.js', // bar and line charts
          'xy.js', // scatter charts
          'pie.js', // pie and donut charts
          'radar.js', // radar charts
          // plugins are complely optioinal
          // this one adds a download button on the chart
          'plugins/export/export.js',
          'plugins/export/export.css'
        ]
      }
    },
    // amCharts uses hardcoded paths to assets (like images and plugin files)
    // so you will need to make sure those don't get fingerprinted
    fingerprint: {
      // you should  needs to be the same as publicPath above
      exclude: ['amcharts']
    }
  });

  return app.toTree();
};
