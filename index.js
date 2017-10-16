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

  included(app) {
    this._super.included.apply(this, arguments);
    const cedarOptions = app && app.options && app.options.cedar;
    const amChartsOptions = cedarOptions && cedarOptions.amCharts;
    if (amChartsOptions) {
      if (amChartsOptions.imports && amChartsOptions.imports.length > 0) {
        const basePath = amChartsOptions.basePath || 'vendor/amcharts';
        amChartsOptions.imports.forEach(function (resource) {
          app.import(path.join(basePath, resource));
        });
        this.import('vendor/cedar/themes/amCharts/calcite.js');
        this.import('vendor/cedar/cedar.js');
      }
    }
    this.import('vendor/cedar/themes/amCharts/calcite.js');
    this.import('vendor/cedar/cedar.js');
    this.import('vendor/shims/cedar.js');
  },

  treeForVendor (vendorTree) {
    // copy cedar dist files to vendor folder
    var cedarTree = new Funnel(path.dirname(require.resolve('@esri/cedar/dist/umd/cedar.js')), {
      // TODO: other files? source maps etc?
      files: ['cedar.js', 'themes/amCharts/calcite.js'],
      destDir: 'cedar'
    });
    // copy amCharts dist files to vendor folder
    var amchartsTree = new Funnel(path.dirname(require.resolve('amcharts3/amcharts/amcharts.js')), {
      destDir: 'amcharts'
    });
    return new MergeTrees([vendorTree, cedarTree, amchartsTree]);
  },

  // TODO: currently cedar bundles these, so this is not needed
  // however if they are later non included in the bundle we'll need this
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
