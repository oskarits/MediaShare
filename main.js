'use strict';

//TODO dotenv require
const express = require('express');
require('dotenv').config();
const multer = require('multer');
const upload = multer({ dest: 'components/uploads' });
const db = require('./tools/db');
const sql = require('./tools/sql_tools');
const passport = require('passport');
const pass = require('./tools/passport');
const session = require('express-session')
const bParser = require('body-parser');
const fitSize = require('./tools/fitSize');
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
    console.log(response);
    res.send(response);
});
// All images will be this size for now
app.use('/image', (req, res, next) => {
    fitSize.magic(req.file.path, 760, './components/uploads' + req.file.filename)
    .then(data => {
        next();
    });
});
// Adds image to database
app.use('/image', (req, res, next) => {
    console.log('sql add here!')
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
//app.post('/signUp', pass.signUp, pass.logIn);

app.post('/logIn',
  passport.authenticate('local', {successRedirect: '/home.html', failureRedirect: '/logIn'}));
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
//    res.redirect('/home');

app.post('/signUp', pass.signUp);
/* app.post('/signUp', 
  passport.authenticate('local'),
  function(req,res) {
    res.redirect('/logIn');
  });
 */app.listen(3000);

