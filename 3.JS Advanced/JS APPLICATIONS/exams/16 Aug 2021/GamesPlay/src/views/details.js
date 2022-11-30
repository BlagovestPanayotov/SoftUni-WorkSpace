import { deleteGame, getComments, getGame, postComment } from "../api/data.js";
import { html, nothing, repeat } from "../lib.js"
import { getUserData, submitHandler } from "../util.js";


const detailsTemplate = (el, user, isCreator, comments, onDelete, onComment) => html`
        <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src=${el.imageUrl} />
                    <h1>${el.title}</h1>
                    <span class="levels">MaxLevel: ${el.maxLevel}</span>
                    <p class="type">${el.category}</p>
                </div>
                <p class="text">
                    ${el.summary}
                </p>
                <div class="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        ${comments.length > 0
        ? repeat(comments, r => r._id, commentTemplate)
        : nothing}
                        
                    </ul>
                    ${comments.length == 0
        ? html`<p class="no-comment">No comments.</p>`
        : nothing}
                </div>
                ${isCreator
        ? html`<div class="buttons">
                            <a href=${'/edit/' + el._id} class="button">Edit</a>
                            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
                            </div>`
        : nothing}
                
            </div>
                ${!isCreator && user
        ? html`<article class="create-comment">
                            <label>Add new comment:</label>
                            <form @submit=${onComment} class="form">
                                <textarea name="comment" placeholder="Comment......"></textarea>
                                <input class="btn submit" type="submit" value="Add Comment">
                            </form>
                        </article>`
        : nothing}
        </section>`

const commentTemplate = (comment) => html`
            <li class="comment">
                <p>Content: ${comment.comment}.</p>
            </li>`

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const promises = [
        getGame(id),
        getComments(id),
    ];
    const user = getUserData();
    const [el, comments] = await Promise.all(promises);
    let isCreator;
    if (user) {
        isCreator = el._ownerId === user._id;
    }
    ctx.render(detailsTemplate(el, user, isCreator, comments, onDelete, submitHandler(onComment)));

    async function onDelete() {
        if (confirm('Are you sure you want to delete this item?')) {
            await deleteGame(id);
            ctx.page.redirect('/');
        }
    }

    async function onComment({ comment }) {
        await postComment({ comment, gameId:id })
        ctx.page.redirect('/details/' + id);
    }
}
