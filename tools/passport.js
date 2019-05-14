const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const sql_tools = require('./sql_tools');

// passport serilaizer and deserializer to recognise the user's session
passport.serializeUser((user, done) => {
    console.log('serialize me', user);
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

// login 
passport.use(new LocalStrategy(
    (username, password, done) => {
        console.log('serving ' + username);
        let res = null;

        const logIn = (username, password) => {
            return new Promise((resolve, reject) => {
                console.log(username);
                sql_tools.login([username], (result) => {
                    bcrypt.compare(password, result[0].password, (err, res) => {
                        if (res) {
                            console.log('OK here');
                            resolve(result);
                        } else {
                            console.log('not ok here');
                            console.log(err);
                            reject(err);
                        }
                    });
                });
            });
        };

        return logIn(username, password).then((result) => {
            if (result.length < 1) {
                return done(null, false);
            } else {
                delete result[0].password;
                return done(null, result[0]);
            }
        }).catch(err => {
            console.log('err', err);
        });
    }));


const logIn = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        } 
        if (!user ) {
            return res.sendStatus(403);
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            return res.send(req.user);
        });
    });
};

// Register
const signUp = (req, res, next) => {
    console.log(req.body);
    const salt = 11;
    bcrypt.hash(req.body.password, salt, (err, hash) => {
        console.log('this is your hash sir', hash);
        sql_tools.register([req.body.email, req.body.username, hash], next);
    });
    return res.send(200);
};

// Check if user is logged in 
const isLogged = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        console.log(req.user);
        res.sendStatus(403);
    }
};

module.exports = {
    logIn: logIn,
    signUp: signUp,
    isLogged: isLogged
};