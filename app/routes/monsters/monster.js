import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').getMonster(parseInt(params.monster_id));
  },
  store: Ember.inject.service()
});
