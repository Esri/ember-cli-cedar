/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-cedar',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/d3/d3.js');
    app.import(app.bowerDirectory + '/vega/vega.js');
    app.import(app.bowerDirectory + '/cedar/src/cedar.js');
    app.import(app.bowerDirectory + '/cedar/src/charts/bar-horizontal.json', {
      destDir: 'assets/charts'
    });
    app.import(app.bowerDirectory + '/cedar/src/charts/bar.json', {
      destDir: 'assets/charts'
    });
    app.import(app.bowerDirectory + '/cedar/src/charts/bubble.json', {
      destDir: 'assets/charts'
    });
    app.import(app.bowerDirectory + '/cedar/src/charts/pie.json', {
      destDir: 'assets/charts'
    });
    app.import(app.bowerDirectory + '/cedar/src/charts/scatter.json', {
      destDir: 'assets/charts'
    });
    app.import(app.bowerDirectory + '/cedar/src/charts/sparkline.json', {
      destDir: 'assets/charts'
    });
    app.import(app.bowerDirectory + '/cedar/src/charts/time.json', {
      destDir: 'assets/charts'
    });
  }
};
