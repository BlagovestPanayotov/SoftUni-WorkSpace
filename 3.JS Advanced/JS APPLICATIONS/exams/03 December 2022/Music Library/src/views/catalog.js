import { getAll } from "../api/data.js";
import { html, repeat } from "../lib.js";
import { getUserData } from "../util.js";


const catalogTemplate = (elements, user) => html`
    <section id="dashboard">
        <h2>Albums</h2>
        ${elements.length == 0
        ? html`<h2>There are no albums added yet.</h2>`
        : html`<ul class="card-wrapper">
                    ${repeat(elements, r => r._id, el => elementTemplate(el, user))}
                    </ul>
        `}        
      </section>`

const elementTemplate = (el) => html`
            <li class="card">
            <img src=${el.imageUrl} />
            <p>
              <strong>Singer/Band: </strong><span class="singer">${el.singer}</span>
            </p>
            <p>
              <strong>Album name: </strong><span class="album">${el.album}</span>
            </p>
            <p><strong>Sales:</strong><span class="sales">${el.sales}</span></p>
            <a class="details-btn" href=${'/details/' + el._id}>Details</a>
          </li>`

export async function showCatalog(ctx) {
    const elements = await getAll();
    const user = getUserData()
    ctx.render(catalogTemplate(elements, user));
}

// _createdOn: 1617194295480
//
// _id: "136777f5-3277-42ad-b874-76d043b069cb"
//
// _ownerId: "847ec027-f659-4086-8032-5173e2f9c93a"
//
// album: "The Wall"
//
// imageUrl: "/images/pink-floyd-the-wall.jpeg"
//
// label: "Columbia"
//
// release: "1979"
//
// sales: "18 million (30 million claimed)"
//
// singer: "Pink Floyd"