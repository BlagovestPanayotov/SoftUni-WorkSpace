const fs = require('fs');
const { IncomingForm } = require('formidable');
const { navHeaderController, headerContentType } = require('../util');

function addBreed(req, res, method) {
    if (method == 'POST') {
        const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
        const form = new IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) {
                console.log(err.message);
                res.writeHead(301, {
                    'Location': '/'
                });
                res.end();
            }
            data.breeds.push(fields.breed);
            fs.writeFileSync('./data.json', JSON.stringify(data), 'utf-8');
        });

        res.writeHead(301, {
            'Location': '/'
        });
        res.end();

    } else if (method == 'GET') {
        res.writeHead(200, headerContentType('text/html'));
        res.write(navHeaderController(fs.readFileSync('./static/views/addBreed.html')));
        res.end();

    }

}

module.exports = {
    addBreed
}