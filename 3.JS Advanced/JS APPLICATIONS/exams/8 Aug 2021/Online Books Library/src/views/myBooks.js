import { getAll, getMyItems } from "../api/data.js";
import { html, repeat } from "../lib.js";
import { getUserData } from "../util.js";


const myItemsTemplate = (elements) => html`
        <section id="my-books-page" class="my-books">
            <h1>My Books</h1>
            <!-- Display ul: with list-items for every user's books (if any) -->
            ${elements.length == 0
        ? html`<p class="no-books">No books in database!</p>`
        : html`<ul class="my-books-list">
                            ${repeat(elements, r => r._id, elementTemplate)}
                            </ul>`}
        </section>`

const elementTemplate = (el) => html`
                <li class="otherBooks">
                    <h3>${el.title}</h3>
                    <p>Type: ${el.type}</p>
                    <p class="img"><img src=${el.imageUrl}></p>
                    <a class="button" href=${'/details/' + el._id}>Details</a>
                </li>`

export async function showMyItems(ctx) {
    const user = getUserData();
    const elements = await getMyItems(user._id)

    ctx.render(myItemsTemplate(elements));
}
