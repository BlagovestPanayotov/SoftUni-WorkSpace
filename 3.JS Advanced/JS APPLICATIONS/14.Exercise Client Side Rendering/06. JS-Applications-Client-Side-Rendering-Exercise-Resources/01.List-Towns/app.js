import { html, render } from '../node_modules/lit-html/lit-html.js';

document.querySelector('form').addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    let towns = formData.get('towns');
    if (towns === '') {
        return;
    }
    renderList(towns.split(', '));

}

function renderList(towns) {
    const root = document.getElementById('root');
    const elements = createList(towns)
    render(elements, root)
}

function createList(data) {
    const listTemplate = html`
                    <ul>
                        ${data.map(town => html`<li>${town}</li>`)}
                    </ul>`
    return listTemplate;
}