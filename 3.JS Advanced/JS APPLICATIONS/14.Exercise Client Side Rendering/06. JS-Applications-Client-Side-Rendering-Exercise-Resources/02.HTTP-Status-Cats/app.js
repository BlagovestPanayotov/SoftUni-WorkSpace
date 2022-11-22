import { html, render } from '../node_modules/lit-html/lit-html.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js'
import { cats } from './catSeeder.js';

const root = document.getElementById('allCats');

renderElements(cats);

function renderElements(data) {
    render(html`<ul>${data.map(e => createElements(e))}</ul>`, root);
}

function createElements(e) {
    const ul = html`
        <li>
            <img src="./images/${e.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
            <div class="info">
                <button @click=${(ev) => update(ev, e)} class="showBtn" >${e.status == true ? 'Show' : 'Hide'} status code</button>
                <div class="status" style=${styleMap(e.status ? { display: 'block' } : { display: 'none' })}  id=${e.id}>
                <h4>Status Code: ${e.statusCode}</h4>
                <p>${e.statusMessage}</p>
                </div>
                </div>
                </li>`
    return ul;
}


cats.forEach(x => x.status = false);
function update(ev, el) {
    el.status = !el.status
    renderElements(cats)
}