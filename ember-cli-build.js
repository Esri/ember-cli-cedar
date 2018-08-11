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
        // bundle - import amCharts files into vendor.js instead of lazy-loading them
        // bundle: true
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
