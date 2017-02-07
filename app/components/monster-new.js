import Ember from 'ember';

export default Ember.Component.extend({
  newMonster: {},
  actions: {
    save(model){
      let id = $('select option:selected').val();
      let planet = this.get('store').getPlanets().findBy('id', parseInt(id));
      let monster = this.get('store').createMonster(model);
      monster.set('planet', planet);

      this.set('newMonster', {});
      this.get('router').transitionTo('monsters');
    }
  },
  store: Ember.inject.service()
});
