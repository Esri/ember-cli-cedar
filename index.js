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

function getAmChartsTree (destDir) {
  // TODO: check this.options or env config to get location of amCharts build
  // (i.e. a licensed build), for now just get free build installed from npm
  var amchartsDir = path.dirname(require.resolve('amcharts3/amcharts/amcharts.js'));
  // NOTE: this file is YUGE and will blow up ember production builds
  // see https://github.com/Esri/ember-cli-cedar/issues/76
  // it also doesn't appear to be needed b/c
  // at runtime amCharts loads the minified version (pdfmake.min.js)
  const exclude = [
    'plugins/export/libs/pdfmake/pdfmake.js',
    'plugins/animate/examples',
    'plugins/dataloader/examples',
    'plugins/export/examples',
    'plugins/responsive/examples',
  ];
  const amchartsTree = new Funnel(amchartsDir, {
    destDir: destDir,
    exclude: exclude
  });
  // copy cedar's calcite theme to the amCharts theme folder
  const calciteThemeDir = path.dirname(require.resolve('@esri/cedar/dist/umd/themes/amCharts/calcite.js'));
  const calciteThemeTree = new Funnel(calciteThemeDir, {
    files: ['calcite.js'],
    destDir: path.join(destDir, 'themes')
  });
  return MergeTrees([amchartsTree, calciteThemeTree]);
}

module.exports = {
  name: 'ember-cli-cedar',

  included(app) {
    this._super.included.apply(this, arguments);
    // parse amCharts options from ember-cli-build
    const options = app && app.options;
    this.amChartsOptions = (options && options.cedar && options.cedar.amCharts) || {};
    // what amCharts files will we need to bundle inside vendor.js
    this.amChartsImports = this.amChartsOptions.imports;
    // NOTE: even when bundling scripts, need to also serve the amCharts assets
    // that those scripts will dynamically load, so we also check for publicPath here
    const publicPath = this.amChartsOptions.publicPath
    if (publicPath && this.amChartsImports) {
      // bundle specified amcharts files from the vendor folder
      this.amChartsImports.forEach(function (resource) {
        app.import(path.join('vendor', publicPath, resource));
      });
    }
  },

  treeForVendor (vendorTree) {
    var treesToMerge = vendorTree ? [ vendorTree ] : [];
    var publicPath = this._getPublicPath();
    if (publicPath && this.amChartsImports) {
      var amchartsTree = getAmChartsTree(publicPath);
      treesToMerge.push(amchartsTree);
    }
    return new MergeTrees(treesToMerge);
  },

  _getPublicPath () {
    let result = '';
    if (this.amChartsOptions && this.amChartsOptions.publicPath) {
      result = this.amChartsOptions.publicPath;
    }
    return result;
  },

  treeForPublic: function(publicNode) {
    var node = this._super.treeForPublic(publicNode);
    var publicPath = this._getPublicPath();

    if (publicPath) {
      // copy amCharts dist files to public folder so that
      // it can dynamically load resources like images, styles, and scripts  at runtime
      // and so we can lazy load the scripts if configured to do so
      var amchartsTree = getAmChartsTree(publicPath);
      if (node) {
        return new MergeTrees([node, amchartsTree]);
      } else {
        return amchartsTree;
      }
    } else {
      return node;
    }
  },

  contentFor(type, config) {
    var content = '';
    if (type === 'head') {
      var publicPath = this._getPublicPath();
      if (publicPath) {
        var assetBaseUrl = (config.cedar && config.cedar.assetBaseUrl) || config.rootURL;
        // concatenate path w/ '/'
        var amChartsPath = [assetBaseUrl.replace(/\/$/, ''), publicPath.replace(/^\//, '')].join('/');
        // tell AmCharts the base bath it should use when dynamically loading resources
        content = `<script>var AmCharts_path = '${amChartsPath}';</script>`;
      }
    }
    return content;
  }
};
