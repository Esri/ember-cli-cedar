import { capitalize } from '@ember/string';
import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  model: function(params) {
    // TODO: default to 'bar'
    const slug = params.slug;
    // fetch the example chart definition JSON from the cedar repository
    return fetch(`https://raw.githubusercontent.com/Esri/cedar/master/docs/examples/${slug}.json`)
      .then(response => {
        // TODO: check if response is OK
        return response.json()
        .then(definition => {
          const title = `${capitalize(params.slug)} Example`;
          definition.legend = { visible: true};
          return {
            title,
            definition,
            slug
          };
        });
      });
  }
});
