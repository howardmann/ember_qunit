import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(){
      // Implicit two-way data binding, no need to update. If it was using datastore then we would call save with Ember data
      this.get('router').transitionTo('monsters');
    }
  },
  store: Ember.inject.service()
});
