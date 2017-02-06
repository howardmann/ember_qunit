import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('monster-edit', 'Integration | Component | monster edit', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{monster-edit}}`);

  assert.equal(this.$('h2').text().trim(), 'EDIT Monster');
});
