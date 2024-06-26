const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const passport = require('passport');

const Admin = require('../../models/Admin');

router.get('/', (req, res, next) => {
    res.send('Route success');
})

router.post('/createAdmin', (req, res, next) => {
    const username = 'Amelias';
    const password = '123';

    Admin.findOne({ username }, (err, foundUser) => {

        if(err){
            res.status(500).json({message: "Username check went bad."});
            return;
        }

        if (foundUser) {
            res.status(400).json({ message: 'Username taken. Choose another one.' });
            return;
        }
  
        const salt     = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);
  
        const aNewUser = new Admin({
            username:username,
            password: hashPass
        });
  
        aNewUser.save(err => {
            if (err) {
                res.status(400).json({ message: 'Saving user to database went wrong.' });
                return;
            }
            
            // Automatically log in user after sign up
            // .login() here is actually predefined passport method
            req.login(aNewUser, (err) => {

                if (err) {
                    res.status(500).json({ message: 'Login after signup went bad.' });
                    return;
                }
            
                // Send the user's information to the frontend
                // We can use also: res.status(200).json(req.user);
                res.status(200).json(aNewUser);
            });
        });
    });
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, admin, failureDetails) => {
        if (err) {
            res.status(500).json({ message: 'Something went wrong authenticating user' });
            return;
        }

        // if (!admin) {
        //     // "failureDetails" contains the error messages
        //     // from our logic in "LocalStrategy" { message: '...' }.
        //     res.status(401).json(failureDetails);
        //     return;
        // }

        req.login(admin, (err) => {
            if (err) {
                res.status(500).json({ message: 'Session save went bad.' });
                return;
            };

            res.status(200).json(admin);
        })
    })(req, res, next);
});

router.get('/loggedin', (req, res) => {
    if (req.isAuthenticated()) {
        res.status(200).json(req.user);
        return;
    }
    res.status(403).json({ message: 'Unauthorized' });
});

router.post('/logout', (req, res) => {
    req.logout();
    res.status(200).json({ message: 'Logout success !' });
});

module.exports = router;