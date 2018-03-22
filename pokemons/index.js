'use strict';

const {hide, seek} = require('./modules/hidenseek');
const readFile = require('./modules/readfile');


let args = process.argv.splice(2);

if (args[0] === 'hide'){
    readFile(args[2]).then(data => {
        hide(args[1], data);
    })
} else if (args[0] === 'seek') {
    seek(args[1]);
} else console.log('wrong choise');