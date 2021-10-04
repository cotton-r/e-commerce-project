const express = require('express');
const logoutRouter = express.Router();
const passport = require('passport');

logoutRouter.get('/', (req, res) => {
    req.logout();
    res.clearCookie('currentsession').redirect('/');
});

module.exports = logoutRouter;