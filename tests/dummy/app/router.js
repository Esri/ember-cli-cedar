import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('charts', function() {
    this.route('chart', {
      path: ':slug'
    });
    this.route('playground');
  });
  // this.route('charts-playground', {path: '/components/charts-playground'});
});

export default Router;
