'use strict';

//dotenv require
const express = require('express');
const multer = require('multer');
const upload = multer({ dest: './uploads' });
const app = express();
const db = require('./tools/db');
const connection = db.connect();

app.use(express.static('Components/home'));
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
        'poster_id',
        'content',
        'img_text',
        'no_votes',
        'time_of_del',
        'no_reports',
    ];
    
});

app.listen(3000);
