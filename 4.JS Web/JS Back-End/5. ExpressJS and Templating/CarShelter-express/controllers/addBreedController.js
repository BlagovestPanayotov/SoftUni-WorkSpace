const { addBreed } = require('../services/dataServices');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('addBreed');
});

router.post('/', async (req, res, next) => {
    try {
        await addBreed(req.body.breed)
    } catch (err) {
        next(err);
    }

    res.redirect('/');
});

module.exports = router;

