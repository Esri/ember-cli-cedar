/*    Copyright 2017 Esri

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License. */

/* jshint node: true */
'use strict';
var path = require('path');
var MergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-cedar',

  // included: function(app) {
  //   this._super.included(app);
  //
  //   // include bower dependencies
  //   // app.import(app.bowerDirectory + '/d3/d3.js');
  //   // app.import(app.bowerDirectory + '/vega/vega.js');
  //   // app.import(app.bowerDirectory + '/arcgis-cedar/dist/cedar.js');
  // },

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/cedar-utils.js');
    this.import('vendor/cedarAmCharts.js');
    this.import('vendor/cedar.js');
    this.import('vendor/shims/cedar.js');
  },

  treeForVendor (vendorTree) {
    //
    // TODO: also pull in amCharts?
    // var amchartsTree = new Funnel(path.dirname(require.resolve('amcharts3/amcharts/amcharts.js')), {
    //   // TODO: other js files?
    //   files: ['amcharts.js', 'serial.js']
    // });
    var cedarUtilsTree = new Funnel(path.dirname(require.resolve('cedar-utils/dist/cedar-utils.js')), {
      files: ['cedar-utils.js']
    });
    var cedarAmChartsTree = new Funnel(path.dirname(require.resolve('cedar-amcharts/dist/cedarAmCharts.js')), {
      files: ['cedarAmCharts.js']
    });
    var cedarTree = new Funnel(path.dirname(require.resolve('arcgis-cedar/dist/cedar.js')), {
      files: ['cedar.js']
    });
    return new MergeTrees([vendorTree, cedarUtilsTree, cedarAmChartsTree, cedarTree]);
  },

  // include chart JSON files
  // treeForPublic: function(publicNode) {
  //   var node = this._super.treeForPublic(publicNode);
  //   var chartFiles = new Funnel(path.join(this.project.root, 'bower_components', 'arcgis-cedar/dist/charts/'), {
  //     include: ['**/*.json'],
  //     destDir: '/assets/charts'
  //   });
  //
  //   if (node) {
  //     return new MergeTrees([node, chartFiles]);
  //   } else {
  //     return chartFiles;
  //   }
  // }
};
