const router = require('express').Router();
const { getBreeds, create } = require('../services/dataServices');

router.get('/', (req, res) => {
    res.render('addCat', { breeds: getBreeds() });
});

router.post('/', async (req, res, next) => {
    const { imageUrl,
        imageTitle,
        breed,
        description,
        name } = req.body;
    try {
        await create(
            imageUrl,
            imageTitle,
            breed,
            description,
            name
        )
    } catch (err) {
        next(err)
    }

    res.redirect('/');
})

module.exports = router;