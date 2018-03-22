'use strict';

const fs = require('fs');

module.exports = function (path, name) {
    if(name) path = `${path}/${name}`;

    return new Promise((resolve, reject) => {

        fs.mkdir(path, error => {
            if(error)
                if(error.code === 'EEXIST') resolve(path);
                else reject(error);
            resolve(path);
        })
    })
};