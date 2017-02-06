import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.get('store').getMonsters();
  },
  store: Ember.inject.service()
});
