/* jshint node:true */
module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function() {
    // NOTE: using npm i -S to save deps in package.json
    // so don't need to addPackageToProject
  }
};
