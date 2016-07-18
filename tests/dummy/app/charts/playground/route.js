import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // return hardcoded JSON
    // should be able to bind both the chart [needs json] and the specification (text control) [needs string] to the hardcoded JSON
      // using an ember computed property would make the type matching work better. using a controller (ember g controller charts/playground --dummy) / (component preferable, to do the stringifying)
      // [ember g component after using the controller]
  },
  actions: {
    renderJSON: function (type) {
      let params = JSON.parse(type);
      console.log(params);
      console.log(this.model(params, JSON));
      this.model(params);
      // ^fix logc^
    }
  }
});
