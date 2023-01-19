const fs = require('fs');
const { headerContentType, navHeaderController } = require('../util');

function listAll(req, res) {
    res.writeHead(200, headerContentType('text/html'));

    const layout = navHeaderController(fs.readFileSync('./static/views/index.html', 'utf-8'));

    const catsData = JSON.parse(fs.readFileSync('./data.json')).cats;

    res.write(layout.toString().replace('<%%catCards%%>', catsData.map(catsCard).join('\n')));
    res.end();
}

function catsCard(cat) {
    const catCard = fs.readFileSync('./static/views/catCard.html', 'utf-8');
    return catCard.toString()
        .replace('<%%imageUrl%%>', cat.imageUrl)
        .replace('<%%breed%%>', cat.breed)
        .replace('<%%description%%>', cat.description)
        .replaceAll('<%%id%%>', cat.id)
}

module.exports = {
    listAll
}