import { getAll, getMyPosts } from "../api/data.js";
import { html, repeat } from "../lib.js";
import { getUserData } from "../util.js";


const dashboardTemplate = (elements, path) => html`
        <section id=${path == '/' ? "dashboard-page" : "my-posts-page"}>
            <h1 class="title">${path == '/' ? 'All Posts' : 'My Posts'}</h1>
            ${elements.length == 0
        ? html`<h1 class="title no-posts-title">${path == '/' ? 'No posts yet!' : 'You have no posts yet!'}</h1>`
        : html`<div class=${path == '/' ? "all-posts" : "my-posts"}>
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

export async function showDashboard(ctx) {
    const path = ctx.path;
    let elements;
    if (path == '/') {
        elements = await getAll();
    } else if (path == '/myPosts') {
        const userId = getUserData();
        elements = await getMyPosts(userId._id);
    }
    ctx.render(dashboardTemplate(elements, path));
}
