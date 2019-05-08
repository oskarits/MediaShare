'use strict';

//TODO dotenv require
const express = require('express');
require('dotenv').config();
const multer = require('multer');
const upload = multer({ dest: 'components/uploads' });
const db = require('./components/tools/db');
const sql = require('./components/tools/sql_tools');
const passport = require('passport');
const session = require('express-session')
const bParser = require('body-parser');
const connection = db.connect();
const app = express();

app.use(express.static('components/'));
app.use('/global', express.static('./global'));
app.use('/modules', express.static('node_modules'));

app.use(session({
    secret: 'FJS',
    resave: true,
    saveUninitialized: true,
    cookie: {secure: false},
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bParser.urlencoded({extended: true}));

app.use(bParser.json());

// Posting function
app.post('/image',  upload.single('my-image'), (req, res) => {
    console.log(req.files);
    const response = {
        message: 'File Upload Complete',
        file: req.file
    };
    res.send(response);
});
// Adds image to database
 app.use('/image', (req, res, next) => {
    const data = [
        'post_id',
        req.user.uID,
        'content',
        'img_text',
        'no_votes',
        'time_of_del',
        'no_reports',
    ];
   sql.insert(data, res);
});

<<<<<<< HEAD
=======
app.post('/logIn', pass.logIn)
app.post('/signUp', passport.signUp, passport.logIn);
>>>>>>> 5e23156ef598a8d7438ae58b5b050e9b2f19213b
app.listen(3000);
