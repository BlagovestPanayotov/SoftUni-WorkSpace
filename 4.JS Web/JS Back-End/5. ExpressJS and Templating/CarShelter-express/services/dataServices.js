const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./services/data.json'));

function getBreeds() {
    return data.breeds;
}

async function addBreed(breed) {
    data.breeds.push(breed);
    await persist();
}

function getList() {
    return data.cats;
}

function getById(id) {
    return data.cats.find(x => x.id == id);
}

async function create(imageUrl, imageTitle, breed, description, name) {
    const id = 'asdf' + ('0000' + (Math.random() * 99999 | 0)).slice(-4);
    data.cats.push({
        id,
        imageUrl,
        imageTitle,
        breed,
        description,
        name
    });
    await persist();
}

async function edit(id, imageUrl, imageTitle, breed, description, name) {
    const cats = getById(id);
    Object.assign(cats, { id, imageUrl, imageTitle, breed, description, name });
    await persist();
}

async function deleteItem(id) {
    const index = data.cats.findIndex(x => x.id == id);
    data.cats.splice(index, 1);
    await persist();
}

function persist() {
    return new Promise((resolve, reject) => {
        fs.writeFile(
            './services/data.json',
            JSON.stringify(data, null, 2),
            (err) => {
                if (err == null) {
                    resolve();
                } else {
                    reject(err);
                }
            }
        );
    });
}

module.exports = {
    getList,
    getById,
    create,
    deleteItem,
    getBreeds,
    addBreed,
    edit
}