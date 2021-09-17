const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const pool = require('../db/index');

const initialize = async () => {

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
        try {
          if (await bcrypt.compare(password, user.password)) {
            // if passwords match, return user
            return done(null, user);

          } else {
            // if passwords dont match, return message
            return done(null, false, { message: 'Password incorrect' });
          }

        } catch(e) {
          return done(e);
        }
      } else {
        // no user found in the database with that email
        return done(null, false, { message: 'Email not registered' });
      }
    });
  };

  passport.use(new localStrategy({ usernameField: 'email' }), authenticateUser);

  passport.serializeUser((user, done) => {  });
  passport.deserializeUser((id, done) => {  });
}

module.exports = initialize;