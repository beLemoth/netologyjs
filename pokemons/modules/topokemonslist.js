'use strict';

const PokemonList = require('./pokemonlist');

module.exports = data => {
    let pokemons = new PokemonList();
    data.forEach(item => {
        if(item) {
            let [name, level] = item.split('|');
            pokemons.add(name, level);
        }
    });
    return pokemons;
};
