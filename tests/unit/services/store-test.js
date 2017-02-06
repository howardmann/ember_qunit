import { moduleFor, test } from 'ember-qunit';

moduleFor('service:store', 'Unit | Service | store', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('getMonsters', function(assert) {
  let service = this.subject();
  assert.equal(service.getMonsters().length, 4, 'returns monsters');
  assert.equal(service.getMonsters().get('firstObject').get('name'), 'pikachu', 'first monster name is correct');
});

test('getMonster(id)', function(assert) {
  let service = this.subject();
  let monster = service.getMonster(2);
  assert.equal(monster.get('name'), 'charmander', 'gets correct monster');
  assert.equal(monster.get('computedHealth'), 12, 'monster has access to computed property');
});
