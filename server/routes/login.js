const express = require('express');
const loginRouter = express.Router();
const passport = require('passport');

loginRouter.post('/', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
}), (req, res) => {
  res.status(201).json(req.user);
})

module.exports = loginRouter;