module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      {
        name: 'vega',
        target: '^2.0.6'
      }, {
        name: 'cedar',
        source: 'https://github.com/Esri/cedar.git',
        target: 'v0.3'
      }
    ]);
  }
};
