const router = require('express').Router();
const { getById, getBreeds, edit } = require('../services/dataServices');

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const obj = Object.assign(getById(id), {});
    obj.breeds = getBreeds();
    res.render('editCat', obj);
});

router.post('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const { imageUrl, imageTitle, breed, description, name } = req.body;
        await edit(id, imageUrl, imageTitle, breed, description, name);
    } catch (err) {
        next(err);
    }

    res.redirect('/');
});

module.exports = router;