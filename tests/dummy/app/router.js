import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('charts', function() {
    this.route('chart', {
      path: ':slug'
    });
  });
  this.route('playground');
  this.route('transform');
  this.route('error-handling');
});

export default Router;
