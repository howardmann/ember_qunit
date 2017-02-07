import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(model){
      // Implicit two-way data binding, no need to update. If it was using datastore then we would call save with Ember data
      let id = $('select option:selected').val();
      let planet = this.get('store').getPlanets().findBy('id', parseInt(id));
      model.set('planet', planet);

      this.get('router').transitionTo('monsters');
    }
  },
  store: Ember.inject.service()
});
