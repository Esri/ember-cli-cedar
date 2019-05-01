/* jshint node:true */
module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function() {
    this.addPackagesToProject({
      '@esri/cedar': '^1.0.0'
    });
  }
};
