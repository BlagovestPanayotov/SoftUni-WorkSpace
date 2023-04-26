const { getAll } = require('../services/bookService');

const homeController = require('express').Router();

homeController.get('/', (req, res) => {

    const books = getAll();

    res.render('home', {
        title: 'Book Store',
        books
    });
});

homeController.get('*', (req, res) => {
    res.render('404', {
        title: '404 Page',
        user: req.user
    });
});

module.exports = homeController;