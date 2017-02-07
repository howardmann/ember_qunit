
import { eq } from 'ember-qunit/helpers/eq';
import { module, test } from 'qunit';

module('Unit | Helper | eq');

// Replace this with your real tests.
test('it returns truthy with equivalent items', function(assert) {
  assert.ok(eq(['john', 'john']));
  assert.ok(eq([1, 1]));
});

test('it returns falsey with un-equivalent items', function(assert) {
  assert.notOk(eq(['john', 'bob']));
  assert.notOk(eq([1, '1']));
});
