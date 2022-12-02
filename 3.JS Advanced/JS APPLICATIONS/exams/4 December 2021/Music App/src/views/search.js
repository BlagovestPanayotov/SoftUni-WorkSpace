import { searchItems } from "../api/data.js";
import { html, nothing, repeat } from "../lib.js";
import { getUserData } from "../util.js";



const searchTemplate = (onSearch, user, elements) => html`
        <section id="searchPage">
            <h1>Search by Name</h1>

            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button @click=${onSearch} class="button-list">Search</button>
            </div>

            <h2>Results:</h2>

            <div class="search-result">
                ${elements.length == 0
        ? html`<p class="no-result">No result.</p>`
        : repeat(elements, r => r._id, e => elementTemplate(e, user))}
                
            </div>
        </section>
`

const elementTemplate = (el, user) => html`
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

export function showSearch(ctx) {
    const user = getUserData();
    let elements = [];
    ctx.render(searchTemplate(onSearch, user, elements));

    async function onSearch(event) {
        const query = event.target.parentElement.querySelector('input').value;
        if (query == '') {
            return alert('The field is required!');
        }
        elements = await searchItems(query);
        ctx.render(searchTemplate(onSearch, user, elements));
    }

}
