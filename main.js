'use strict';

//TODO dotenv require
const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'components/uploads' });
const app = express();
const db = require('./tools/db');
const sql = require('./tools/sql_tools');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session')
//const connection = db.connect();

app.use(express.static('components/'));
app.use('/global', express.static('./global'));
// express.static('components/)
// make the index.html the splash page showing the newest post and a summary of the site
// remove all folders from components and make all in one folder

// Passport config
passport.serializeUser((user, done) => {
    console.log('serialize: '+user);
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

app.use(session({
    secret: 'FJS',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true}
}));

passport.use(new LocalStrategy(
    (username, password, done) => {
        console.log('User here: '+username);
        // Replace with SQL queries
        let user_query = "SELECT * FROM Profile WHERE username == ${username};"
        let pass_query = "SELECT * FROM Profile WHERE password ==${password};"
        if (userame !== user_query || password !== pass_query) { return done(null, false); }
        return done(null, {username: username});
    }
));
app.use(passport.initialize());
app.use(passport.session());

app.post('/login',
passport.authenticate('local', { successRedirect: '/feed', failureRedirect: '/signUp.html'}));


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
