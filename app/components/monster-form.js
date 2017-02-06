import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(model){
      this.attrs.save(model);
    }
  }
});
