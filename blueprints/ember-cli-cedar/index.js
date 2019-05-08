/* jshint node:true */
module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function() {
    // ensure peerDependencies are installed
    this.addPackagesToProject([
      { name: '@esri/arcgis-rest-auth', target: '^2.0.0' },
      { name: '@esri/arcgis-rest-feature-layer', target: '^2.0.0' },
      { name: '@esri/arcgis-rest-request', target: '^2.0.0' },
      { name: '@esri/arcgis-rest-types', target: '^2.0.0' },
      { name: '@esri/cedar', target: '^1.0.1' }
    ]);
  }
};
