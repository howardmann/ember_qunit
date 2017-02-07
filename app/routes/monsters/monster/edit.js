import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      monster: this.modelFor('monsters.monster'),
      planets: this.get('store').getPlanets()
    })
  },
  store: Ember.inject.service()
});
