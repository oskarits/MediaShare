'use strict';
const sharp = require('sharp');

// TODO size has to be used here
const magic = (file, size, newPath) => {
    return sharp(file).resize(size).toFile(newPath).then((data) => {
        console.log(data);
        return data;
    }).catch((err) => {
        console.log(err);
    });
};

module.exports = {
    magic: magic,
}