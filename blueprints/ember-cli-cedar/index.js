/* jshint node:true */
module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function() {
    this.addPackagesToProject({
      '@esri/arcgis-rest-auth': '^2.0.0',
      '@esri/arcgis-rest-feature-layer': '^2.0.0',
      '@esri/arcgis-rest-request': '^2.0.0',
      '@esri/arcgis-rest-types': '^2.0.0',  
      '@esri/cedar': '^1.0.1'
    });
  }
};
