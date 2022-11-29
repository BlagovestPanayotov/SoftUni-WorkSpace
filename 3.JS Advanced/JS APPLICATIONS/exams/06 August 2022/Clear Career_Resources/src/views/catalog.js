import { getAll } from "../api/data.js";
import { html, repeat } from "../library.js";


const catalogTemplate = (elements, count) => html`
        <section id="dashboard">
          <h2>Job Offers</h2>
          ${count > 0
        ? repeat(elements, r => r._id, offerTemplate)
        : html`<h2>No offers yet.</h2>`}
        </section>`

const offerTemplate = (el) => html`
        <div class="offer">
            <img src=${el.imageUrl} alt="example1" />
            <p>
              <strong>Title: </strong><span class="title">${el.title}</span>
            </p>
            <p><strong>Salary:</strong><span class="salary">${Number(el.salary)}</span></p>
            <a class="details-btn" href=${'/details/' + el._id}>Details</a>
          </div>`

export async function showCatalog(ctx) {
    const elements = await getAll();
    const count = elements.length;
    ctx.render(catalogTemplate(elements, count));
}