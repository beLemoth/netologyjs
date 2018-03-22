'use strict';

const fs = require('fs');

module.exports = function (path, encoding = "UTF-8", isJSON = true) {

    return new Promise((resolve, reject) => {
        let config = {
            "encoding": encoding
        };

        fs.readFile(path, config, (error, data) => {
            if(error) reject(error);
            if(isJSON) {
                resolve(JSON.parse(data));
            }
            resolve(data);
        })
    })
};