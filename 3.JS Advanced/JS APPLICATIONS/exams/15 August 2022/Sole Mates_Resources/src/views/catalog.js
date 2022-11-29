import { getAll } from "../api/data.js";
import { html, repeat } from "../lib.js";


const catalogTemplate = (elements, count) => html`
<section id="dashboard">
          <h2>Collectibles</h2>
          ${count
        ? html`<ul class="card-wrapper">
           ${repeat(elements, r => r._id, elementTemplate)}
           </ul>`
        : html`<h2>There are no items added yet.</h2>`}
        </section>`

const elementTemplate = (el) => html`
            <li class="card">
              <img src=${el.imageUrl} alt="travis" />
              <p>
                <strong>Brand: </strong><span class="brand">${el.brand}</span>
              </p>
              <p>
                <strong>Model: </strong
                ><span class="model">${el.model}</span>
              </p>
              <p><strong>Value:</strong><span class="value">${el.value}</span>$</p>
              <a class="details-btn" href="/details/${el._id}">Details</a>
            </li>
        `

export async function showCatalog(ctx) {
    const elements = await getAll();
    const count = elements.length;

    ctx.render(catalogTemplate(elements, count));
}
