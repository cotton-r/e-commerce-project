const express = require('express');
const logoutRouter = express.Router();
const passport = require('passport');

logoutRouter.get('/', (req, res) => {
    req.logout();
    res.status(200).redirect('/');
});

module.exports = logoutRouter;