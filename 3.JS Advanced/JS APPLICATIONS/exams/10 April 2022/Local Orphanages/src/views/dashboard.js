import { getAll } from "../api/data.js";
import { html, repeat } from "../lib.js";


const dashboardTemplate = (elements) => html`
        <section id="dashboard-page">
            <h1 class="title">All Posts</h1>
            ${elements.length == 0
        ? html`<h1 class="title no-posts-title">No posts yet!</h1>`
        : html`<div class="all-posts">
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
    const elements = await getAll();
    ctx.render(dashboardTemplate(elements));
}
