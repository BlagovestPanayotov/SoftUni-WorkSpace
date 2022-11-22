import { get, post } from './api.js'
import { html, render } from '../../node_modules/lit-html/lit-html.js'


const articleTemplate = (elements) => html`
            <div>
                <select id="menu">
                ${elements.map(itemTemplate)};
                </select>
            </div>
            <form @submit=${async (event) => addItem(event)}>
                <label for="itemText">
                Text:
                </label>
                <input type="text" name="itemText" id="itemText" />
                <input type="submit" value="Add">
            </form>
             `;

const itemTemplate = (item) => {
    const op = html`<option value=${item._id}>${item.text}</option>`;
    return op;
}

const root = document.querySelector('article');

update(await get());

async function addItem(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const text = formData.get('itemText');
    if (text == '') {
        return;
    }
    await post({ text });
    event.target.reset();
    update(await get());
}

function update(elements) {
    const result = articleTemplate(Object.values(elements));
    render(result, root);
}