const { createReadStream, readFileSync } = require('fs');

function styleController(req, res) {
    res.writeHead(200, headerContentType('text/css'));
    createReadStream('./static/styles/site.css').pipe(res);
}

function faviconController(req, res) {
    res.writeHead(200, {
        'Content-Type': 'image/x-image'
    });
    createReadStream('./static/images/pawprint.ico').pipe(res);
}

function headerContentType(type) {
    return {
        'Content-Type': type
    }
}

function navHeaderController(layout) {
    const header = readFileSync('./static/views/header.html', 'utf-8');
    const nav = readFileSync('./static/views/nav.html', 'utf-8');
    return layout.toString()
        .replace("<%%headers%%>", header.toString())
        .replace('{{%%nav%%}}', nav.toString());
}

function defaultController(req, res) {
    res.writeHead(404);
    res.write('<h1>404 Not Found!</h1>');
    res.end();
}

module.exports = {
    styleController,
    headerContentType,
    faviconController,
    navHeaderController,
    defaultController
}