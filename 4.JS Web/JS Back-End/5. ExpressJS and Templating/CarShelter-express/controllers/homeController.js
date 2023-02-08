const router = require('express').Router();
const { getList } = require('../services/dataServices');

router.get('/', (req, res) => {
    const cats = getList();
    res.render('home', {
        layout: 'homeLayout',
        cats,
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.redirect('/')
})

module.exports = router;