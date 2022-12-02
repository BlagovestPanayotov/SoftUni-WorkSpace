import { getMyItems } from "../api/data.js";
import { html, nothing, repeat } from "../lib.js";
import { getUserData } from "../util.js";


const catalogTemplate = (elements, user) => html`
<section id="my-listings">
            <h1>My car listings</h1>
            <div class="listings">
                ${elements.length == 0
        ? html`<p class="no-cars">You haven't listed any cars yet.</p>`
        : repeat(elements, r => r._id, el => elementTemplate(el, user))}
            </div>
        </section>`

const elementTemplate = (el, user) => html`
            <div class="listing">
                    <div class="preview">
                        <img src=${el.imageUrl}>
                    </div>
                    <h2>${el.brand} ${el.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${el.year}</h3>
                            <h3>Price: ${el.price} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href=${'/details/' + el._id} class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>`

export async function showMyItems(ctx) {
    const user = getUserData()
    const elements = await getMyItems(user._id);
    ctx.render(catalogTemplate(elements, user));
}

// _createdOn: 1616162253496
//
// _id: "3987279d-0ad4-4afb-8ca9-5b256ae3b298"
//
// _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8"
//
// brand: "Audi"
//
// description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
//
// imageUrl: "/images/audia3.jpg"
//
// model: "A3"
//
// price: 25000
//
// year: 2018