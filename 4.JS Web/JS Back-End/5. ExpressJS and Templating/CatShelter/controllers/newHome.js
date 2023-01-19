const fs = require('fs');
const { navHeaderController, headerContentType } = require('../util');

function newHome(req, res, method, url) {
    if (url.slice(-3) == 'jpg' || url == undefined) {
        res.end();
    } else {
        const id = url.slice(9);
        const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
        const indexOfCat = data.cats.findIndex(x => x.id == id);
        const currentCat = data.cats[indexOfCat];
        if (method == 'POST') {
            data.cats.splice(indexOfCat, 1);
            fs.writeFileSync('./data.json', JSON.stringify(data), 'utf-8');
            res.writeHead(301, {
                'Location': '/'
            })
            res.end();
        } else if (method == 'GET') {
            const layout = navHeaderController(
                fs.readFileSync('./static/views/catShelter.html', 'utf-8'))
                .replace('<%%form%%>', formTemplate(currentCat));
            res.writeHead(200, headerContentType('text/html'));
            res.write(layout);
            res.end();
        }
    }
}

function formTemplate(data) {
    return `
    <form action="/newHome/${data.id}" method="POST" class="cat-form">
            <h2>Shelter the cat</h2>
            <img src=${data.imageUrl} alt="">
            <label for="name">Name</label>
            <input type="text" id="name" value=${data.name} disabled>
            <label for="description">Description</label>
            <textarea id="description" disabled>${data.description}</textarea>
            <label for="group">Breed</label>
            <select id="group" disabled>
                <option value="${data.breed}">${data.breed}</option>
            </select>
            <button>SHELTER THE CAT</button>
        </form>`
}

module.exports = {
    newHome
}