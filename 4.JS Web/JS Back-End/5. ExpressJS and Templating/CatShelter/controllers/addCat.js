const fs = require('fs');
const { IncomingForm } = require('formidable');
const { navHeaderController, headerContentType } = require('../util');

function addCat(req, res, method) {
    const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
    if (method == 'POST') {
        const form = new IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) throw err;
            const path = files.upload.filepath;
            console.log(path);
            const prefix = ('00000' + (Math.random() * 99999 | 0)).slice(-5);
            const item = {
                "id": 'asdf' + prefix,
                "name": fields.name,
                "imageUrl": `./static/images/cats/${prefix}.jpg`,
                "breed": fields.breed,
                "description": fields.description
            }
            data.cats.push(item);
            fs.writeFileSync('./data.json', JSON.stringify(data), 'utf-8');
            fs.writeFileSync(`/static/images/cats/${prefix}.jpg`, fs.readFileSync(path), (err) => {
                if (err) throw err;
            });

        });
        res.writeHead(301, {
            'Location': '/',
        });

        res.end()
    } else if (method == 'GET') {
        const layout = navHeaderController(
            fs.readFileSync('./static/views/addCat.html', 'utf-8')
                .replace('<%%options%%>', data.breeds.map(option).join('\n')));
        res.writeHead(200, headerContentType('text/html'));
        res.write(layout);
        res.end()
    }
}

function option(opt) {
    return `<option value="${opt}">${opt}</option>`
}

module.exports = {
    addCat
}