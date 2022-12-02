import { searchItems } from "../api/data.js";
import { html, nothing, repeat } from "../lib.js";
import { getUserData } from "../util.js";



const searchTemplate = (onSearch, user, elements) => html`
        <section id="search-cars">
            <h1>Filter by year</h1>

            <div class="container">
                <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
                <button @click=${onSearch} class="button-list">Search</button>
            </div>

            <h2>Results:</h2>
            <div class="listings">

                ${elements.length == 0
        ? html`<p class="no-cars"> No results.</p>`
        : repeat(elements, r => r._id, e => elementTemplate(e, user))}

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

export function showSearch(ctx) {
    const user = getUserData();
    let elements = [];
    ctx.render(searchTemplate(onSearch, user, elements));

    async function onSearch(event) {
        const query = Number(event.target.parentElement.querySelector('input').value);
        if (query == '') {
            return alert('The field is required!');
        }
        if (query == NaN || query % 1 > 0) {
            return alert('The year must be an integer number!')
        }
        elements = await searchItems(query);
        ctx.render(searchTemplate(onSearch, user, elements));
    }

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