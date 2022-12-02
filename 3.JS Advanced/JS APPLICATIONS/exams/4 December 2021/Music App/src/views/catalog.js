import { getAll } from "../api/data.js";
import { html, nothing, repeat } from "../lib.js";
import { getUserData } from "../util.js";


const catalogTemplate = (elements,user) => html`
        <section id="catalogPage">
            <h1>All Albums</h1>
            ${elements.length == 0
        ? html`<p>No Albums in Catalog!</p>`
        : repeat(elements, r => r._id, el=>elementTemplate(el,user))}
        </section>`


const elementTemplate = (el,user) => html`
            <div class="card-box">
                <img src=${el.imgUrl}>
                <div>
                    <div class="text-center">
                        <p class="name">Name: ${el.name}</p>
                        <p class="artist">Artist: ${el.artist}</p>
                        <p class="genre">Genre: ${el.genre}</p>
                        <p class="price">Price: $${el.price}</p>
                        <p class="date">Release Date: ${el.releaseDate}</p>
                    </div>
                    ${user
                        ? html`<div class="btn-group">
                                <a href=${'/details/' + el._id} id="details">Details</a>
                                </div>`
                        : nothing}
                </div>
            </div>`

export async function showCatalog(ctx) {
    const elements = await getAll();
    const user = getUserData()
    ctx.render(catalogTemplate(elements,user));
}

// _createdOn: 1617194128618
//
// _id: "ff436770-76c5-40e2-b231-77409eda7a61"
//
// _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8"
//
// artist: "Brandi Carlile"
//
// description: "Upon release, In These Silent Days received positive reviews from critics. At Metacritic, which assigns a normalized rating out of 100 to reviews from mainstream critics, the album has an average score of 87 out of 100, which indicates 'universal acclaim'."
//
// genre: "Low Country Sound Music"
//
// imgUrl: "/images/BrandiCarlile.png"
//
// name: "In These Silent Days"
//
// price: "12.80"
//
// releaseDate: "October 1, 2021"