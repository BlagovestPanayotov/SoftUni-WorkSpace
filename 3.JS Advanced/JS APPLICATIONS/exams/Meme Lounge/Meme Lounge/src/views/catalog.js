import { getAll } from "../api/data.js";
import { html, repeat } from "../lib.js";


const catalogTemplate = (elements) => html`
        <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
                ${elements.length == 0
        ? html`<p class="no-memes">No memes in database.</p>`
        : html`${repeat(elements, r => r._id, elementTemplate)}`}
            </div>
        </section>`

const elementTemplate = (el) => html`
                <div class="meme">
                    <div class="card">
                        <div class="info">
                            <p class="meme-title">${el.title}</p>
                            <img class="meme-image" alt="meme-img" src=${el.imageUrl}>
                        </div>
                        <div id="data-buttons">
                            <a class="button" href=${'/details/' + el._id}>Details</a>
                        </div>
                    </div>
                </div>`

export async function showCatalog(ctx) {
    const elements = await getAll();
    ctx.render(catalogTemplate(elements));
}

// _createdOn: 1616162253496
//
// _id: "0"
//
// _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8"
//
// description: "Programming is often touted as a smart and lucrative career path. It's a job that (sometimes) offers flexibility and great benefits. But it's far from sunshine and Nyan Cat rainbows. The hours are long. The mistakes are frustrating. And your eyesight is almost guaranteed to suffer. These memes cover most of the frustration (and funny moments) of programming. At least we can laugh through the pain. "
//
// imageUrl: "/images/2.png"
//
// title: "Debugging"