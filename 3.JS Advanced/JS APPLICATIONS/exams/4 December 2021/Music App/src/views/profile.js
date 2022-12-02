import { getAll, getMyItems } from "../api/data.js";
import { html, repeat } from "../lib.js";
import { getUserData } from "../util.js";


const profileTemplate = (elements,user) => html`
        <section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/${user.gender}.png">
                <div class="user-content">
                    <p>Username: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>My memes count: ${elements.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                ${elements.length == 0
                        ? html`<p class="no-memes">No memes in database.</p>`
                        : html`${repeat(elements, r => r._id, elementTemplate)}`}
            </div>
        </section>` 

const elementTemplate = (el) => html`
                <div class="user-meme">
                    <p class="user-meme-title">${el.title}</p>
                    <img class="userProfileImage" alt="meme-img" src=${el.imageUrl}>
                    <a class="button" href=${'/details/' + el._id}>Details</a>
                </div>`

export async function showProfile(ctx) {
    const user = getUserData();
    const elements = await getMyItems(user._id)

    ctx.render(profileTemplate(elements,user));
}
