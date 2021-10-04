const express = require('express');
const logoutRouter = express.Router();

logoutRouter.get('/', (req, res) => {
    req.logout();
    req.session.destroy(function (err) {
        if (!err) {
            res.status(200).clearCookie('currentsession', {path: '/'}).json({status: "Success"});
        }
    });
});

module.exports = logoutRouter;