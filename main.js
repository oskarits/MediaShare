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
    cookie: { secure: false },
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bParser.urlencoded({ extended: true }));

app.use(bParser.json());

app.post('/signUp', pass.signUp);
// Posting function
app.post('/image', pass.isLogged, upload.single('my-image'),
    (req, res, next) => {
        next();
    });
app.post('/image', upload.single('my-image'), (req, res, next) => {
    console.log(req.files);
    next();
});
// All images will be this size for now
app.use('/image', (req, res, next) => {
    console.log('resize magic here!')
    fitSize.magic(req.file.path, 760, './components/uploads' + req.file.filename)
        .then(data => {
            next();
        });
});
// Adds image to database

app.use('/image', (req, res) => {
    console.log('sql add here!')
    console.log(req.user.uID);
    const data = [
        //        req.user.uID,
        //TODO HARDCODED CHANGE THIS
        1,
        'content',
    ];
    console.log('user?' ,req.user.uID);
    sql.insert(data, res);
});
//app.post('/signUp', pass.signUp, pass.logIn);

app.post('/logIn',
    passport.authenticate('local', { successRedirect: '/home.html', failureRedirect: '/logIn' }));
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
//    res.redirect('/home');
/* app.post('/signUp', 
  passport.authenticate('local'),
  function(req,res) {
    res.redirect('/logIn');
  });
 */app.listen(3000);

