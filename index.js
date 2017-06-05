/* Copyright (c) 2017 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

/* jshint node: true */
'use strict';
var path = require('path');
var BroccoliMergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-cedar',

  included: function(app) {
    this._super.included(app);

    // include bower dependencies
    app.import(app.bowerDirectory + '/d3/d3.js');
    app.import(app.bowerDirectory + '/vega/vega.js');
    app.import(app.bowerDirectory + '/arcgis-cedar/dist/cedar.js');
  },

  // include chart JSON files
  treeForPublic: function(publicNode) {
    var node = this._super.treeForPublic(publicNode);
    var chartFiles = new Funnel(path.join(this.project.root, 'bower_components', 'arcgis-cedar/dist/charts/'), {
      include: ['**/*.json'],
      destDir: '/assets/charts'
    });

    if (node) {
      return new BroccoliMergeTrees([node, chartFiles]);
    } else {
      return chartFiles;
    }
  }
};
