'use strict';

const mysql = require('mysql2');

const connect = () => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS,
    });
    return connection;
};

module.exports = {
    connect: connect
};