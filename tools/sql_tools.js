'use strict';
const db = require('./db');
const time = new Date();

const select = (res) => {
    db.connect().query("SELECT * FROM Content ORDER BY post_time;", (err, results, fields) => {
        if (err == null) {
            res.send(results);
        } else {
            console.log(err);
        }
    });
};

const insert = (data, res) => {
// Time is unix epoch, post-time is set to del-time at creation
// When upvoted, we increase the del-time by 3600, so the script just checks the posts where the time is less than when the script runs
// !! NOTE !! Time is in milliseconds due to JS being Like that 
let postTime = time.getTime();
    db.connect().execute('INSERT INTO Content (user_id, content, img_text, ${postTime}, no_votes, ${postTime}, no_reports) VALUES (?, ?, ?, ?, ?, ?, ?);', data, (err, results, fields) => {
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
    db.connect().query("SELECT * FROM Profile WHERE email = ?;", data, (err, results, fields) => {
        console.log(err);
        callback(results);
    });
};

const register = (data, next) => {
    db.connect().query("INSERT INTO Profile (email, username, password) VALUES (?, ?, ?);", data, (err, results, fields) => {
        console.log(err);
        next();
    });
};
const addTime = (user_id) => {
    let currentTime = time.getTime();
    // 3600000 has to be added since JS does time in milliseconds
    db.connect().execute('UPDATE Content SET time_of_del = time_of_del + 3600000 WHERE user_id = ${user_id};') 
}

//getNew getBest

module.exports = {
    select: select,
    insert: insert,
    addTime: addTime,
    login: login,
    register: register,
};