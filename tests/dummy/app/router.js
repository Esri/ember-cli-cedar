import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('charts', function() {
    this.route('chart', {
      path: ':slug'
    });
    this.route('playground');
  });
  this.route('transform');
});

export default Router;
