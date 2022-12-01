import { getAll } from "../api/data.js";
import { html, repeat } from "../lib.js";


const catalogTemplate = (elements) => html`
        <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            ${elements.length == 0
        ? html`<p class="no-books">No books in database!</p>`
        : html`<ul class="other-books-list">
                ${repeat(elements, r => r._id, elementTemplate)}
            </ul>`}
        </section>`

const elementTemplate = (el) => html`
                <li class="otherBooks">
                    <h3>${el.title}</h3>
                    <p>Type: ${el.type}</p>
                    <p class="img"><img src=${el.imageUrl}></p>
                    <a class="button" href=${'/details/' + el._id}>Details</a>
                </li>`

export async function showCatalog(ctx) {
    const elements = await getAll();
    
    ctx.render(catalogTemplate(elements));
}

