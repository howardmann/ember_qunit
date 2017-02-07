import { moduleFor, test } from 'ember-qunit';

moduleFor('model:planet', 'Unit | planet', {
  // Specify the other units that are required for this test.
  unit: true
});

test('planet:model', function(assert){
  let planet = this.subject({id: 1, name: 'earth', age: 100, scale: 2});
  assert.equal(planet.get('name'), 'earth', 'returns correct name');
});
