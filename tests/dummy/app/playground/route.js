import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  queryParams: {
    spec: {
      refreshModel: true
    }
  },

  model: function(params) {
    const spec = params.spec || 'bar';
    return fetch (`https://cedar-v1.surge.sh/examples/${spec}.json`)
    .then(response => {
      // TODO: check if response is OK
      return response.json();
    });
  },
});
