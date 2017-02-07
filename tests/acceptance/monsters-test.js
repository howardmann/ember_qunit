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
    assert.equal(find('.planet-test').text(), 'Planet: earth', 'displays correct planet');
  });

  click('.monster-edit-test');

  andThen(function(){
    assert.equal(currentURL(), '/monsters/1/edit', 'redirects to correct URL');
  });

  visit('/monsters');

  click('.monster-new-test');

  andThen(function(){
    assert.equal(currentURL(), '/monsters/new', 'redirects to correct URL');
  });
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

test('visiting monsters/:id/edit', function(assert){
  visit('/monsters/1/edit');

  andThen(function(){
    assert.equal(currentURL(), '/monsters/1/edit', 'displays correct URL');
    assert.equal(find('h2').text(), 'EDIT Monster', 'renders EDIT Monster');
    assert.equal(find('.form-name input').val(), 'pikachu', 'prepopulates input name');
    assert.equal(find('.form-health input').val(), '10', 'prepopulates input health');
    assert.equal(find('.form-damage input').val(), '3', 'prepopulates input damage');
    assert.equal(find('select option:selected').text(), 'earth', 'prepopulates select planet');
  });

  fillIn('.form-name input', 'Raichu');
  fillIn('.form-health input', 3);
  fillIn('.form-damage input', 2);
  fillIn('.my-select', 1);
  click('input:submit');

  andThen(function(){
    assert.equal(currentURL(), '/monsters', 'redirects back to correct URL');
    assert.equal(find('.name-test:first').text(), 'Name: Raichu', 'displays correct name for edited monster');
  });

  click('.name-test:first');

  andThen(function(){
    assert.equal(currentURL(), '/monsters/1', 'redirects back to correct URL');
    assert.equal(find('.planet-test').text(), 'Planet: earth', 'displays updated planet');
  });

});
