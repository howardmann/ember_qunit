import Ember from 'ember';
import Monster from '../models/monster';

let monsters = [
  Monster.create({id:1, name: 'pikachu', health: 10, damage: 3}),
  Monster.create({id:2, name: 'charmander', health: 15, damage: 3}),
  Monster.create({id:3, name: 'squirtle', health: 100, damage: 90}),
  Monster.create({id:4, name: 'bulbasaur', health: 15, damage: 7})
];

export default Ember.Service.extend({
  getMonsters(){
    return monsters;
  },
  getMonster(id){
    return this.getMonsters().findBy('id', id);
  }
});
