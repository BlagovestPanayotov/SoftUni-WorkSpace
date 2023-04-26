const homeController = require('express').Router();

homeController.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page',
        user: req.user
    });
});

homeController.use('*', (req, res) => {
    res.render('404', {
        title: '404 Page - Gaming Team',
        user: req.user
    });
});

module.exports = homeController;