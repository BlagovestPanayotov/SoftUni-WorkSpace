import { getMyPosts } from "../api/data.js";
import { html, repeat } from "../lib.js";
import { getUserData } from "../util.js";


const myPostsTemplate = (elements) => html`
        <section id="my-posts-page">
            <h1 class="title">My Posts</h1>
            ${elements.length == 0
        ? html`<h1 class="title no-posts-title">You have no posts yet!</h1>`
        : html`<div class="my-posts">
            ${repeat(elements, r => r._id, postTemplate)}
            </div>`}
        </section>
`

const postTemplate = (el) => html`
            <div class="post">
                <h2 class="post-title">${el.title}</h2>
                <img class="post-image" src=${el.imageUrl} alt="Material Image">
                <div class="btn-wrapper">
                    <a href=${`/details/${el._id}`} class="details-btn btn">Details</a>
                </div>
            </div>`

export async function showMyPosts(ctx) {
    const user = getUserData();
    const elements = await getMyPosts(user._id);
    ctx.render(myPostsTemplate(elements));
}
