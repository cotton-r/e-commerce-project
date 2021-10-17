const express = require('express');
const loginRouter = express.Router();
const passport = require('passport');


loginRouter.post('/', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
}), (req, res) => {
  
});

module.exports = loginRouter;