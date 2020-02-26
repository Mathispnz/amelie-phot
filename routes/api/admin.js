const express = require('express');
const router = express.Router();

const passport = require('passport');

const Admin = require('../../models/Admin');

router.get('/', (req, res, next) => {
    res.send('Route success');
})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, admin, failureDetails) => {
        if (err) {
            res.status(500).json({ message: 'Something went wrong authenticating user' });
            return;
        }

        req.login(admin, (err) => {
            if (err) {
                res.status(500).json({ message: 'Session save went bad.' });
                return;
            };

            res.status(200).json(admin);
        })
    })(req, res, next);
});

router.post('/loggedin', (req, res) => {
    if (req.isAuthenticated()) {
        res.status(200).json(req.user);
        return;
    }
    res.status(403).json({ message: 'Unauthorized' });
});

module.exports = router;