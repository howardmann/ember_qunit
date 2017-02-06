import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('monster-form', 'Integration | Component | monster form', {
  integration: true
});

test('it renders dynamic model passed in', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('model', {name: 'Howie', health: 20, damage: 10});

  this.render(hbs`{{monster-form model=model}}`);

  assert.equal(this.$('.form-name label').text().trim(), 'Name:', "correct label name");
  assert.equal(this.$('.form-health label').text().trim(), 'Health:', 'correct label health');
  assert.equal(this.$('.form-damage label').text().trim(), 'Damage:', 'correct label damage');

  assert.equal(this.$('.form-name input').val(), 'Howie', 'prepopulates name');
  assert.equal(this.$('.form-health input').val(), 20, 'prepopulates health');
  assert.equal(this.$('.form-damage input').val(), 10, 'prepopulates damage');
});

test('should trigger external action on form submit passing through values', function(assert) {

  // test double for the external action
  this.set('save', (actual) => {
    let expected = {name: 'Felix', health: '20', damage: '10'};
    assert.deepEqual(actual, expected, 'submitted value is passed to externalAction');
  });

  this.set('newMonster', {});
  this.render(hbs`{{monster-form model=newMonster save=(action save)}}`);

  // Fill out the form and force an onchange
  this.$('.form-name input').val('Felix');
  this.$('.form-name input').change();

  this.$('.form-health input').val(20);
  this.$('.form-health input').change();

  this.$('.form-damage input').val(10);
  this.$('.form-damage input').change();

  // Click the button to submit the form
  this.$('input:submit').click();
});
