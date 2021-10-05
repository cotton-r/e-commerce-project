const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const pool = require('../db/index');

const initialize = () => {

  const authenticateUser = (email, password, done) => {
    // query the database
    pool.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
      if (error) {
        throw error;
      }

      if (results.rows.length > 0) {
        //if a user is found with the same email in the database
        const user = results.rows[0];
      
        //compare password with hashed password in database to check for a match
        bcrypt.compare(password, user.password, (error, isMatch) => {
          if (error) {
            throw error;
          }
          // if the passwords match
          if (isMatch) {
            return done(null, user); 
          } else {
            // if passwords dont match, return message
            console.log('wrong password');
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      } else {
        // if no user is found in database
        return done(null, false, { message: 'Email is not registered' });
      }
    });
  };
  passport.use(new localStrategy({ usernameField: 'email' }, authenticateUser));

  passport.serializeUser((user, done) => done(null, user.name)); // store user.user_id in session cookie
  passport.deserializeUser((user_id, done) => {
    pool.query('SELECT * FROM users WHERE user_id = $1', [user_id], (error, results) => {
      if (error) {
        throw error;
      }
      return done(null, results.rows[0]);
    });
  });
};

module.exports = initialize;