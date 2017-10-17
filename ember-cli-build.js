/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
    cedar: {
      // include amCharts scripts/styles in vendor files
      amCharts: {
        // publicPath: amCharts will be included at this path in the public folder
        // use this if you are not loading amCharts from the CDN
        publicPath: 'amcharts',
        // imports: an array of amcharts files to be imported (bundled) in vendor files
        imports: ['amcharts.js', 'serial.js', 'xy.js', 'pie.js', 'radar.js', 'plugins/export/export.js', 'plugins/export/export.css']
        // TODO: srcDir: '/path/to/local/amCharts'
        // otherwise defaults to installing from node_modules
      }
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
