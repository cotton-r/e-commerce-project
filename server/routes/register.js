const express = require('express');
const pool = require('../db/index');
const bcrypt = require('bcrypt');
const dayjs = require('dayjs');
const registerRouter = express.Router();

// set up dayjs New Date Object
const now = dayjs();

registerRouter.post('/', async (req, res) => {
  const { name, email, password, password2 } = req.body;

  // check that no fields are missing
  if (!name || !email || !password || !password2 ) {
    res.json({ message: 'Please complete all fields' });
  }
  // check if passwords match
  if (password !== password2) {
    res.json({ message: 'Passwords do not match' });
  }
  // check password is under 16 characters
  if (password.length > 15) {
    res.json({ message: 'Password should be no more than 15 characters long' });
  }

   //hash the submitted password to be stored in db
  const hashedPassword = await bcrypt.hash(password, 10);

  //check to see if the submitted email already exists in db
  pool.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
    if (error) {
      throw error;
    }
    if (results.rows.length > 0) {
      res.json({ message: 'Email already registered' });
    } else {
      pool.query('INSERT INTO users (name, email, password, created_date) VALUES ($1, $2, $3, $4)', 
        [name, email, hashedPassword, now().format('YYYY-MM-DD HH:mm:ss')], 
        (error, results) => {
        if (error) {
          throw error;
        }
        res.status(201).redirect('/login');
      });
    }
  });
});

module.exports = registerRouter;