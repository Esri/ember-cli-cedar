import Ember from 'ember';

export default Ember.Controller.extend({
  options: {
    width: 600,
    height: 600,
    autolabels: false
  },
  actions: {
    transform (queryResult, dataset) {
      var features = queryResult.features;
      var newFeatures = [];
      var outStatsField = dataset.query.outStatistics[0].outStatisticFieldName;
      var groupByField = dataset.query.groupByFieldsForStatistics;
      var numberOfSlices = 5;
      var sumOther = 0;
      // loop through the sorted query results
      for (var i = 0, len = features.length; i < len; i++) {
        var feature = features[i];
        if (i < numberOfSlices) {
          // this is in the top x features, let's include it
          newFeatures.push(features[i]);
        } else {
          // not in top x features, just incriment the sum
          sumOther = sumOther + feature.attributes[outStatsField];
        }
      }
      if (sumOther > 0) {
        // there were more than 5
        // add a record representing the rest
        var attr = {};
        attr[groupByField] = "Other";
        attr[outStatsField] = sumOther;
        newFeatures.push({
          attributes: attr
        });
      }
      // return the new features
      queryResult.features = newFeatures;
      return queryResult;
    }
  }
});
