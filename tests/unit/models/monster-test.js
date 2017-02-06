import { moduleFor, test } from 'ember-qunit';

moduleFor('model:monster', 'Unit | monster', {
  // Specify the other units that are required for this test.
  unit: true
});

test('monster:model', function(assert){
  let monster = this.subject({id: 1, name: 'howie', health: 20, damage: 3});
  assert.equal(monster.get('name'), 'howie', 'returns correct name');
  assert.equal(monster.get('health'), 20, 'returns correct health');
  assert.equal(monster.get('damage'), 3, 'returns correct damage');
  assert.equal(monster.get('computedHealth'), 17, 'returns computed health');
});
