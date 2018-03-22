const random = require('./random');
const makeDir = require('./makedir');
const makeFile = require('./makefile');
const errorHandler = require('./errorhandler');
const readFile = require('./readfile');
const rimraf = require('rimraf');
const readDir = require('./readdir');
const toPokemonsList = require('./topokemonslist');

function hide(path, pokemonsList) {

    rimraf(path, ()=>{
        return makeDir(path).then(()=>{
                let dirs = [];
                for(let i=1; i<11; i++){
                    dirs.push(makeDir(path, (i<10) ? `0${i}` : `${i}`));
                }
                return Promise.all(dirs);
            },
            errorHandler
        ).then(() => {
                let files = [];

                let pokemonsCount = random(1, (pokemonsList.length < 3) ? pokemonsList.length : 3),
                    foldersInUse = [],
                    pokemonsInUse = [];

                while (foldersInUse.length < pokemonsCount) {
                    let folder = random(1, 10);
                    let pokemonIndex;

                    if(foldersInUse.indexOf(folder) === -1) {
                        do {
                            pokemonIndex = random(0, pokemonsList.length-1)
                        } while (pokemonsInUse.indexOf(pokemonIndex) !== -1);           // pokemon not in use check

                        files.push(makeFile((folder<10) ? `${path}/0${folder}` : `${path}/${folder}`, `${pokemonsList[pokemonIndex].name}|${pokemonsList[pokemonIndex].level}`));
                        foldersInUse.push(folder);                                      // add used folder to list
                        pokemonsInUse.push(pokemonIndex);                               // add pokemons index to list
                    }

                }
                return Promise.all(files);
            },
            errorHandler
        ).then((data)=>{
            console.log('-----------------\nwere hidden\n-----------------');
            toPokemonsList(data).show();
            console.log('-----------------');
        }, errorHandler);
    })
}

function seek(url) {

    readDir(url).then( data => {
            let promises = [];

            promises = data.map( folder => {
                return readDir(url + '/' + folder).then(data => {
                    if (data[0]) {
                        return readFile(url + '/' + folder + '/' + data[0], "UTF-8", false);
                    }
                }, errorHandler);
            });

            return Promise.all(promises);
        }, errorHandler
    ).then(data => {
        console.log('-----------------\nwere found\n-----------------');
        toPokemonsList(data).show();
        console.log('-----------------');
    }, errorHandler);

}

module.exports = {
    hide,
    seek
};