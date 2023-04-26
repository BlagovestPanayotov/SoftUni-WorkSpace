const { isGuest } = require('../middlewares/guards');
const { register, login } = require('../services/userService');
const { parseError } = require('../util/parser');

const authController = require('express').Router();


authController.get('/register', isGuest(), (req, res) => {

    res.render('register', {
        title: 'Register Page - Gaming Team'
    });
});

authController.post('/register', isGuest(), async (req, res) => {
    try {
        if (req.body.username == '' || req.body.email == '' || req.body.password == '') {
            throw new Error('All fields are required!');
        }
        if (req.body.password.length < 4) {
            throw new Error('Password must be at least 4 characters long!');
        }
        if (req.body.password !== req.body.repass) {
            throw new Error('Passwords dont\'t mathc!');
        }
        const token = await register(req.body.username, req.body.email, req.body.password);


        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);

        res.render('register', {
            title: 'Register Page - Gaming Team',
            errors,
            body: {
                username: req.body.username,
                email: req.body.email
            }
        });
    }
});

authController.get('/login', isGuest(), (req, res) => {

    res.render('login', {
        title: 'Login Page - Gaming Team'
    });
});

authController.post('/login', isGuest(), async (req, res) => {
    try {
        const token = await login(req.body.email, req.body.password);

        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);

        res.render('login', {
            title: 'Login Page - Gaming Team',
            errors,
            body: {
                email: req.body.email
            }
        });
    }
});

authController.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});



module.exports = authController;



// authController.post('/register', isGuest(),
//     body('username')
//         .isLength({ min: 5 }).withMessage('Username must be at least 5 characters long')
//         .isAlphanumeric().withMessage('Username may contain only letters and numbers'),
//     body('password')
//         .isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
//         .isAlphanumeric().withMessage('Password may contain only letters and numbers'),
//     async (req, res) => {
//         try {
//             const { errors } = validationResult(req);
//             if (errors.length > 0) throw errors;

//             if (req.body.password !== req.body.repass) {
//                 throw new Error('Passwords dont\'t mathc!');
//             }
//             const token = await register(req.body.username, req.body.password);


//             res.cookie('token', token);
//             res.redirect('/');
//         } catch (error) {
//             const errors = parseError(error);

//             res.render('register', {
//                 title: 'Register Page',
//                 errors,
//                 body: {
//                     username: req.body.username
//                 }
//             });
//         }
//     });