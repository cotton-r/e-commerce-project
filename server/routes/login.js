const express = require('express');
const bcrypt = require('bcrypt');
const loginRouter = express.Router();
const passport = require('passport');

loginRouter.post('/', passport.authenticate('local', {
  successRedirect: ':/',
  failureRedirect: ':/login',
  failureFlash: true
}), (req, res) => {

})

module.exports = loginRouter;