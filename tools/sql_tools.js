'use strict';

const select = (connection) => {
const time = new Date();
};
// Add DBNAME 
const insert = (data, connection ,res) => {
// Time is unix epoch, post-time is set to del-time at creation
//                                      vvvvvv CHECK JS VS UNIX EPOCH
// When upvoted, we increase the del-time by 3600, so the script just checks the posts where the time is less than when the script runs
    connection.execute('INSERT INTO DBNAME (posted_id, content, img_text, ${postDate}, no_votes, ${delHour}, no_reports) VALUES (?, ?, ?, ?, ?, ?, ?);', data, (err, results, fields) => {;
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

// FOR BOTH: Get all the images but limit 20 with javascript?
// Get 20 images with the newest postTime for normal screen
const getNew = (connection) => {
    connection.query('')
};

// Get 20 oldest images with the newsst
const getBest = (connection) => {
    connection.query('')
}

const del = (connection) => {
    let currentTime = time.getTime();
    connection.query('DELETE FROM DBNAME WHERE time_of_del < ${currentTime;');
}

module.exports = {
    select: select,
    insert: insert,
    getNew: getNew,
    getBest: getBest,
};