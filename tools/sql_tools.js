'use strict';
const db = require('./db');
const time = new Date();


// Add DBNAME 
const insert = (data, connection ,res) => {
// Time is unix epoch, post-time is set to del-time at creation
// When upvoted, we increase the del-time by 3600, so the script just checks the posts where the time is less than when the script runs
// !! NOTE !! Time is in milliseconds due to JS being Like that 
let postTime = time.getTime();
    connection.execute('INSERT INTO DBNAME (user_id, content, img_text, ${postTime}, no_votes, ${postTime}, no_reports) VALUES (?, ?, ?, ?, ?, ?, ?);', data, (err, results, fields) => {
        console.log(results);
        console.log(fields);
        if (err === null) {
            res.json(results);
        } else {
            console.log('error', err);
            res.send(500);
        }
    });
};

const login = (data, callback) => {
    db.connect().query("SELECT * FROM oc WHERE email = ?;", data, (err, results, fields) => {
        console.log(err);
        callback(results);
    });
};

const register = (data, next) => {
    db.connect().query("INSERT INTO oc (email, username, password) VALUES (?, ?, ?);", data, (err, results, fields) => {
        console.log(err);
        next();
    });
};
const addTime = (connection, user_id) => {
    let currentTime = time.getTime();
    // 3600000 has to be added since JS does time in milliseconds
    connection.execute('UPDATE DBNAME SET time_of_del = time_of_del + 3600000 WHERE user_id = ${user_id};') 
}

//getNew getBest

module.exports = {
    insert: insert,
    addTime: addTime,
    login: login,
    register: register,
};