import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    spec: {
      refreshModel: true
    }
  },

  model: function(params) {
    console.log(params);
    const spec = params.spec || 'bar';
    return fetch (`http://cedar-v1.surge.sh/examples/${spec}.json`)
    .then(response => {
      // TODO: check if response is OK
      return response.json()
    });
  },
});
