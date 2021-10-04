const express = require('express');
const logoutRouter = express.Router();

logoutRouter.get('/', (req, res) => {
    req.logout();
    res.clearCookie('currentsession').redirect('/');
});

module.exports = logoutRouter;