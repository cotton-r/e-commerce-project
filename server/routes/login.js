const express = require('express');
const loginRouter = express.Router();
const passport = require('passport');
const cookieParser = require('cookie-parser');


loginRouter.post('/', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
}), (req, res) => {
  res.cookie('session', req.user.user_id, { secure: true, signed: true, expires: new Date(Date.now() + 3600) });
});

module.exports = loginRouter;