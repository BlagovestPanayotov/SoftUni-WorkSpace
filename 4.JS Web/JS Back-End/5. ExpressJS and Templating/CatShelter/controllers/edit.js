const fs = require('fs');
const { IncomingForm } = require('formidable');
const { headerContentType, navHeaderController } = require('../util');

function edit(req, res, method, url) {
    const id = url.replace('/edit/', '');
    const data = JSON.parse(fs.readFileSync('./data.json'));
    const currentCat = data.cats.find(x => x.id == id);
    if (method == "POST") {
        const form = new IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) throw err;
            currentCat.name = fields.name;
            currentCat.imageUrl = fields.imageUrl;
            currentCat.breed = fields.breed;
            currentCat.description = fields.description;
            fs.writeFileSync('./data.json', JSON.stringify(data), 'utf-8');
        });
        res.writeHead(301, {
            'Location': '/',
        });
        res.end();
    } else if (method == "GET") {
        const layout = navHeaderController(
            fs.readFileSync('./static/views/editCat.html'))
            .replace('<%%form%%>', formTemplate(currentCat, data.breeds));

        res.writeHead(200, headerContentType('text/html'));
        res.write(layout);
        res.end();
    }
}

function formTemplate(data, breeds) {
    return `
        <form action="/edit/${data.id}" method="POST" class="cat-form" enctype="multipart/form-data">
            <h2>Edit Cat</h2>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" value=${data.name}>
            <label for="description">Description</label>
            <textarea id="description" name="description">${data.description}</textarea>
            <label for="image">Image</label>
            <input type="file" id="image" name="upload" value=${data.imageUrl}>
            <label for="group">Breed</label>
            <select id="group" name="breed">
                ${breeds.map(x => `<option value="${x}">${x}</option>`).join('\n')}                
            </select>
            <button>Edit Cat</button>
        </form>`
}

module.exports = {
    edit
}