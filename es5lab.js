'use strict';

class Pokemon {
    constructor(name, level=0){
        this.name = name;
        this.level = level;
    }
    show(){
        console.log(`name: ${this.name}, level: ${this.level}`);
    }
}

class PokemonList extends Array {
    constructor(...args) {
        super(...args);
    }
    add(name, level){
        let pokemon = new Pokemon(name, level);
        this.push(pokemon);
    }
}

Pokemon.prototype.valueOf = function() {
    return this.level;
};

PokemonList.prototype.show = function(){
  for(let pokemon of this) {
      pokemon.show();
  }
  console.log('Pokemon count :', this.length);
};

PokemonList.prototype.max = function(){
    let maxLevel = Math.max.apply(Math, this.map(pokemon => pokemon.valueOf()));
    for(let pokemon of this) {
        if(pokemon.valueOf() === maxLevel) return pokemon;
    }
};

let lost = new PokemonList(),
    found = new PokemonList();

lost.add('Bulbasaur', 10);
lost.add('Pikachu', 100);
lost.add('Haunter',48);
lost.add('Snorlax',65);
lost.add('Suicune',88);
found.add('Metagross',45);
found.add('Articuno',30)
found.add('Belemoth');


found.push(lost.pop());

found.show();
lost.show();

lost.max().show();
found.max().show();






