'use strict';

//TODO dotenv require
const express = require('express');
const multer = require('multer');
const upload = multer({ dest: './uploads' });
const app = express();
//const db = require('./tools/db');
//const connection = db.connect();
const sql = require('./tools/sql_tools');

//
app.use(express.static('components/home'));
// express.static('components/)
// make the index.html the splash page showing the newest post and a summary of the site
// remove all folders from components and make all in one folder
app.use('/global', express.static('./global'));

app.post('/image',  upload.single('my-image'), (req, res) => {
    console.log(req.files);
    const response = {
        message: 'File Upload Complete',
        file: req.file
    };
    res.send(response);
});
app.use('/image', (req, res, next) => {

    const data = [
        'post_id',
        'user_id',
        'content',
        'img_text',
        'no_votes',
        'time_of_del',
        'no_reports',
    ];
   // media insert 
   sql.insert(data, connection, res);
});

app.listen(3000);
