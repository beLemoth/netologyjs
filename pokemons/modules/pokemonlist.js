const Pokemon = require('./pokemon');

class PokemonList extends Array {
    constructor(...args) {
        super(...args);
    }
    add(name, level) {
        let pokemon = new Pokemon(name, level);
        this.push(pokemon);
    }
    show() {
        this.forEach(pokemon => {
            pokemon.show();
        });
        console.log('Pokemon count :', this.length);
    }
    max() {
        let maxLevel = Math.max.apply(Math, this.map(pokemon => pokemon.valueOf()));
        for(let pokemon of this) {
            if(pokemon.valueOf() === maxLevel) return pokemon;
        }
    }
}

module.exports = PokemonList;
