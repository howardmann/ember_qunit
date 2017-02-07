import Ember from 'ember';
import Monster from '../models/monster';
import Planet from '../models/planet';

let pikachu = Monster.create({id:1, name: 'pikachu', health: 10, damage: 3, planet: null});
let charmander = Monster.create({id:2, name: 'charmander', health: 15, damage: 3, planet: null});
let squirtle = Monster.create({id:3, name: 'squirtle', health: 100, damage: 90, planet: null});
let bulbasaur = Monster.create({id:4, name: 'bulbasaur', health: 15, damage: 7, planet: null});

let earth = Planet.create({id: 1, name: 'earth', age: 100, scale: 2});
let mars = Planet.create({id: 2, name: 'mars', age: 80, scale: 3});
let venus = Planet.create({id: 3, name: 'venus', age: 150, scale: 1});

pikachu.set('planet', earth);
charmander.set('planet', mars);
squirtle.set('planet', earth);
bulbasaur.set('planet', venus);

let planets = [earth, mars, venus];

let monsters = [pikachu, charmander, squirtle, bulbasaur];

export default Ember.Service.extend({
  getMonsters(){
    return monsters;
  },
  getMonster(id){
    return this.getMonsters().findBy('id', id);
  },
  createMonster(data){
    let monster = Monster.create(data);
    monster.set('id', monsters.length + 1);
    monsters.pushObject(monster);
    return monster;
  },
  getPlanets(){
    return planets;
  }
});
