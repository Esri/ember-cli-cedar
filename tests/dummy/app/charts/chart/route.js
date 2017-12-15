import fetch from 'fetch';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // TODO: default to 'bar'
    const slug = params.slug;
    // fetch the example chart definition JSON from the cedar v1 docs site
    return fetch (`https://cedar-v1.surge.sh/examples/${slug}.json`)
    .then(response => {
      // TODO: check if response is OK
      return response.json()
      .then(definition => {
        const title = `${Ember.String.capitalize(params.slug)} Example`;
        return {
          title,
          definition,
          slug
        };
      });
    });
  }
});
