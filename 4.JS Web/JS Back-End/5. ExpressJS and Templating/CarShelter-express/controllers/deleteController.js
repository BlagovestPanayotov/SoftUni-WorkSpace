const router = require('express').Router();
const { getById, deleteItem } = require('../services/dataServices');

router.get('/:id', (req, res) => {
    res.render('delete', getById(req.params.id));
});

router.post('/:id', async (req, res, next) => {
    try {
        deleteItem(req.params.id);
    } catch (err) {
        next(err);
    }

    res.redirect('/');
})

module.exports = router;