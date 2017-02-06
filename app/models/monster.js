import Ember from 'ember';

export default Ember.Object.extend({
  computedHealth: Ember.computed('health', 'attack', function(){
    return this.get('health') - this.get('damage');
  })
});
