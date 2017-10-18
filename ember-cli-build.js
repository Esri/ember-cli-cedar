/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
    cedar: {
      amCharts: {
        // publicPath: amCharts will be included at this path in the public folder
        // use this if you are not loading amCharts from the CDN
        publicPath: 'amcharts',
        // imports: an array of amcharts files to be imported (bundled) in vendor files
        imports: ['amcharts.js', 'serial.js', 'xy.js', 'pie.js', 'radar.js']
        // TODO: srcDir: '/path/to/local/amCharts'
        // otherwise defaults to installing from node_modules
      }
    }
  });

  return app.toTree();
};
