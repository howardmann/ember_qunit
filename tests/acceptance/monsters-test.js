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
  });

  click('.monster-edit-test');

  andThen(function(){
    assert.equal(currentURL(), '/monsters/1/edit', 'redirects to correct URL');
  });

  visit('/monsters');

  click('.monster-new-test');

  andThen(function(){
    assert.equal(currentURL(), '/monsters/new', 'redirects to correct URL');
  })
});

test('visiting /monsters/new', function(assert) {
  visit('/monsters/new');

  andThen(function() {
    assert.equal(currentURL(), '/monsters/new', 'displays correct URL');
    assert.equal(find('h2').text(), 'NEW Monster', 'displays title');
  });

  fillIn('.form-name input', 'Banana');
  fillIn('.form-health input', 20);
  fillIn('.form-damage input', 10);
  click('input:submit');

  andThen(function(){
    assert.equal(currentURL(), '/monsters', 'redirects back to correct URL');
    assert.equal(find('.name-test').length, 5, 'displays one more monster');
    assert.equal(find('.name-test:last').text(), 'Name: Banana', 'displays correct name for new monster');
  });

});
