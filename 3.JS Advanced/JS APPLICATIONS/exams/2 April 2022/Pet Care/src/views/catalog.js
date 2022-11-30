import { getAll } from "../api/data.js";
import { html, repeat } from "../lib.js";


const catalogTemplate = (elements, path) => html`
        <section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
            ${elements.length > 0
                ? html`${repeat(elements, r => r._id, postTemplate)}`
                : html`<p class="no-pets">No pets in dashboard</p>`}
            </div>
        </section>
`

const postTemplate = (el) => html`
                <div class="animals-board">
                    <img class="animal-image-cover" src=${el.image}>
                    <h2 class="name">${el.name}</h2>
                    <h3 class="breed">${el.breed}</h3>
                    <div class="action">
                        <a class="btn" href=${`/details/${el._id}`}>Details</a>
                    </div>
                </div>`


export async function showCatalog(ctx) {
    const elements = await getAll();
    ctx.render(catalogTemplate(elements));
}
