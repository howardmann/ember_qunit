import { test } from 'qunit';
import moduleForAcceptance from 'ember-qunit/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | monsters');

test('visiting /monsters', function(assert) {
  visit('/monsters');

  andThen(function() {
    assert.equal(currentURL(), '/monsters', 'displays correct URL');
    assert.equal(find('.name-test').length, 4, 'displays 4 monsters');
    assert.equal(find('.name-test').eq(1).text(), 'Name: charmander', 'displays correct name');
  });

  click('.monster-show-test:first');

  andThen(function(){
    assert.equal(currentURL(), '/monsters/1', 'redirects to correct URL');
    assert.equal(find('.monster-name-test').text(), 'Name: pikachu', 'displays name');
    assert.equal(find('.health-test').text(), 'Health: 10', 'displays health');
    assert.equal(find('.damage-test').text(), 'Damage: 3', 'displays damage');
    assert.equal(find('.computed-health-test').text(), 'Remaining: 7', 'displays computedHealth');
  })
});
