'use strict';
const sharp = require('sharp');

const magic = (file, size, newPath) => {
    return sharp(file).resize(file).toFile(newPath).then((data) => {
        console.log(data);
        return data;
    }).catch((err) => {
        console.log(err);
    });
};

module.exports = {
    magic: magic,
}