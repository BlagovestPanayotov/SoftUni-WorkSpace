const express = require('express');
const hbs = require('express-handlebars');

const homeController = require('./controllers/homeController');
const addBreedController = require('./controllers/addBreedController');
const addCatController = require('./controllers/addCatController');
const editCatController = require('./controllers/editCatController');
const deleteController = require('./controllers/deleteController');


const handlebars = hbs.create({
    extname: '.hbs'
});

const app = express();

app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('static'));

app.use(homeController);
app.use('/addBreed', addBreedController);
app.use('/addCat', addCatController);
app.use('/edit', editCatController);
app.use('/delete', deleteController);


app.listen(3000);