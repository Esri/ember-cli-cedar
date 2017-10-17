/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
    cedar: {
      // include amCharts scripts/styles in vendor files
      amCharts: {
        // TODO: srcDir: '/path/to/local/amCharts'
        // otherwise defaults to installing from node_modules
        imports: ['amcharts.js', 'serial.js', 'xy.js', 'pie.js', 'radar.js', 'plugins/export/export.js', 'plugins/export/export.css']
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
