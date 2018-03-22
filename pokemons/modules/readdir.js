'use strict';

const fs = require('fs');

module.exports = url => {
    return new Promise((resolve, reject) => {
        fs.readdir(url, (err, data)=> {
            if(err) reject(err);
            resolve(data);
        })
    });
};