import { searchForElements } from "../api/data.js";
import { html, nothing } from "../lib.js";
import { getUserData, submitHandler } from "../util.js";


const searchTemplate = (onSubmit, placeholder = nothing) => html`
 <section id="search">
          <h2>Search by Brand</h2>

          <form @submit=${onSubmit} class="search-wrapper cf">
            <input
              id="#search-input"
              type="text"
              name="search"
              placeholder="Search here..."
              required
            />
            <button type="submit">Search</button>
          </form>

          <h3>Results:</h3>

          ${placeholder}
          
          </div>
        </section>`

const elTemplate = (el, user) => html`
            <div id="search-container">
            <ul class="card-wrapper">
              <!-- Display a li with information about every post (if any)-->
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
                ${user
        ? html`<a class="details-btn" href=${'/details/' + el._id}>Details</a>`
        : nothing}
              </li>
            </ul>
`

export async function showSearch(ctx) {
    let placeholder;
    ctx.render(searchTemplate(submitHandler(onSubmit), placeholder));
    // const data = await searchForElements(query);
    async function onSubmit({ search }) {
        const data = await searchForElements(search.trim());

        const user = getUserData();
        if (data.length === 0) {
            placeholder = html`<h2>There are no results found.</h2>`;
        } else {
            placeholder = data.map(e => elTemplate(e, user));
        }
        ctx.render(searchTemplate(submitHandler(onSubmit), placeholder));

    }
    // console.log(data);
}


