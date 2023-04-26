const { body, validationResult } = require('express-validator');
const { register, login } = require('../services/userService');
const { parseError } = require('../util/parser');
const { isGuest } = require('../middlewares/guards');

const authController = require('express').Router();


authController.get('/register', isGuest(), (req, res) => {
    //TODO replace with actual view assignment
    res.render('register', {
        title: 'Register Page'
    });
});

authController.post('/register', isGuest(),
    body('username')
        .isLength({ min: 3 }).withMessage('The username must be at least 3 characters long!')
        .isAlphanumeric().withMessage('The username must consist only english letters and digits!'),
    body('password')
        .isLength({ min: 3 }).withMessage('The password must be at least 3 characters long!')
        .isAlphanumeric().withMessage('The password must consist only english letters and digits!'),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) throw errors;

            if (req.body.password !== req.body.repass) {
                throw new Error('Passwords dont\'t match!');
            }
            const token = await register(req.body.username, req.body.password);

            res.cookie('token', token);
            res.redirect('/');
        } catch (error) {
            const errors = parseError(error);

            //TODO add error display to actual template from assignments
            res.render('register', {
                title: 'Register Page',
                errors,
                body: {
                    username: req.body.username
                }
            });
        }
    });

authController.get('/login', isGuest(), (req, res) => {
    //TODO replace with actual view assignment
    res.render('login', {
        title: 'Login Page'
    });
});

authController.post('/login', isGuest(), async (req, res) => {
    try {
        const token = await login(req.body.username, req.body.password);

        res.cookie('token', token);
        res.redirect('/'); //TODO replace with redirect by assignment
    } catch (error) {
        const errors = parseError(error);

        //TODO add error display to actual template from assignments
        res.render('login', {
            title: 'Login Page',
            errors,
            body: {
                username: req.body.username
            }
        });
    }
});

authController.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});



module.exports = authController;