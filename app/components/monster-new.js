import Ember from 'ember';

export default Ember.Component.extend({
  newMonster: {},
  actions: {
    save(model){
      this.get('store').createMonster(model);
      this.set('newMonster', {});
      this.get('router').transitionTo('monsters');
    }
  },
  store: Ember.inject.service()
});
