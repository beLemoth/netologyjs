'use strict';

const fs = require('fs');

module.exports = function (path, data) {
    path = `${path}/pokemons.txt`;

    let config = {encoding: 'utf-8'};

    return new Promise((resolve, reject) => {

        fs.writeFile(path, data, config, error => {
            if(error) reject(error);
            resolve(data);                // return pokemons name to then function
        })
    })
};