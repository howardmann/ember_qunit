import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.get('store').getPlanets();
  },
  store: Ember.inject.service()
});
