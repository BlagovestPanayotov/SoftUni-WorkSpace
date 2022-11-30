import { getAll } from "../api/data.js";
import { html, repeat } from "../lib.js";


const catalogTemplate = (elements) => html`
        <section id="catalog-page">
            <h1>All Games</h1>
            ${elements.length == 0
        ? html`<h3 class="no-articles">No articles yet</h3>`
        : html`${repeat(elements, r => r._id, postTemplate)}`}
        </section>`

const postTemplate = (el) => html`
            <div class="allGames">
                <div class="allGames-info">
                    <img src=${el.imageUrl}>
                    <h6>${el.category}</h6>
                    <h2>${el.title}</h2>
                    <a href=${"/details/" + el._id} class="details-button">Details</a>
                </div>
            </div>`

export async function showCatalog(ctx) {
    const elements = await getAll();
    ctx.render(catalogTemplate(elements));
}


