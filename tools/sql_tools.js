'use strict';

const select = (connection) => {
const time = new Date();
};
// Add DBNAME 
const insert = (data, connection ,res) => {
    let postHour = time.getHour();
    let delHour = postHour += 1;
    connection.execute('INSERT INTO DBNAME (posted_id, content, img_text, ${postHour}, no_votes, ${delHour}, no_reports) VALUES (?, ?, ?, ?, ?, ?, ?);', data, (err, results, fields) => {;
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

module.exports = {
    select: select,
    insert: insert,
    getNew: getNew,
    getBest: getBest,
};