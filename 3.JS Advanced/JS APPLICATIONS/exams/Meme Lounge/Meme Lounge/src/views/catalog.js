import { getAll } from "../api/data.js";
import { html, repeat } from "../lib.js";


const catalogTemplate = (elements) => html`
        <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
                ${elements.length == 0
        ? html`<p class="no-memes">No memes in database.</p>`
        : html`${repeat(elements, r => r._id, elementTemplate)}`}
            </div>
        </section>`

const elementTemplate = (el) => html`
                <div class="meme">
                    <div class="card">
                        <div class="info">
                            <p class="meme-title">${el.title}</p>
                            <img class="meme-image" alt="meme-img" src=${el.imageUrl}>
                        </div>
                        <div id="data-buttons">
                            <a class="button" href=${'/details/' + el._id}>Details</a>
                        </div>
                    </div>
                </div>`

export async function showCatalog(ctx) {
    const elements = await getAll();
    ctx.render(catalogTemplate(elements));
}

