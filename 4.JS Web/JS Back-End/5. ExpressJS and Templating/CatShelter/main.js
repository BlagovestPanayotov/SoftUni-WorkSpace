const { addCat } = require('./controllers/addCat');
const { addBreed } = require('./controllers/addBreed');
const { listAll } = require('./controllers/listAll');
const { styleController, faviconController, defaultController } = require('./util');
const { edit } = require('./controllers/edit');
const { newHome } = require('./controllers/newHome');
const { search } = require('./controllers/search');


function handleRequest(req, res) {
    const method = req.method;
    const url = req.url;

    if (url.slice(-23) == '/static/styles/site.css') {
        styleController(req, res);
    } else if (url.slice(-12) == '/favicon.ico' || url.slice(-13) == '/pawprint.ico') {
        faviconController(req, res);
    } else if (url == '/') {
        listAll(req, res);
    } else if (url == '/add-breed') {
        addBreed(req, res, method);
    } else if (url == '/add-cat') {
        addCat(req, res, method);
    } else if (url.slice(0, 5) == '/edit') {
        edit(req, res, method, url);
    } else if (url.slice(0, 8) == '/newHome') {
        newHome(req, res, method, url);
    } else if (url.startsWith('/search')) {
        search(req, res);
    } else {
        defaultController(req, res);
    }
}

module.exports = {
    handleRequest
}