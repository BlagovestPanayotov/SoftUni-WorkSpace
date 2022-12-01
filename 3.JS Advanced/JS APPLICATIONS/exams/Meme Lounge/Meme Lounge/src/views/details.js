import { getById, deleteItem } from "../api/data.js";
import { html, nothing } from "../lib.js"
import { getUserData } from "../util.js";




const detailsTemplate = (el, isCreator, onDelete) => html`
        <section id="meme-details">
            <h1>Meme Title: ${el.title}</h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src=${el.imageUrl}>
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>${el.description}</p>
                    ${isCreator
        ? html`<a class="button warning" href=${'/edit/' + el._id}>Edit</a>
                                <button @click=${onDelete} class="button danger">Delete</button>`
        : nothing}
                </div>
            </div>
        </section>`


export async function showDetails(ctx) {
    const id = ctx.params.id;
    const el = await getById(id);
    const user = getUserData();
    let isCreator = false;
    if (user) {
        isCreator = el._ownerId === user._id;
    }
    ctx.render(detailsTemplate(el, isCreator, onDelete));

    async function onDelete() {
        if (confirm('Are you sure you want to delete this item?')) {
            await deleteItem(id);
            ctx.page.redirect('/catalog');
        }
    }
}












// const detailsTemplate = (el, isCreator, user, onDelete, likes, allowedLike, onLike) => html`
//         <section id="details-page" class="details">
//             <div class="book-information">
//                 <h3>${el.title}</h3>
//                 <p class="type">Type: ${el.type}</p>
//                 <p class="img"><img src=${el.imageUrl}></p>
//                 <div class="actions">
//                     ${isCreator
//         ? html`<a class="button" href=${'/edit/' + el._id}>Edit</a>
//                                 <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`
//         : nothing}
//                     ${user && !isCreator && allowedLike
//         ? html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>`
//         : nothing}
//                     <div class="likes">
//                         <img class="hearts" src="/images/heart.png">
//                         <span id="total-likes">Likes: ${likes}</span>
//                     </div>
//                 </div>
//             </div>
//             <div class="book-description">
//                 <h3>Description:</h3>
//                 <p>${el.description}</p>
//             </div>
//         </section>`

// export async function showDetails(ctx) {
//     const id = ctx.params.id;
//     const promises = [
//         getById(id),
//         getLikes(id),
//     ];
//     const user = getUserData();
//     const [el, likes] = await Promise.all(promises);
//     let isCreator = false;
//     let allowedLike = false;
//     if (user) {
//         isCreator = el._ownerId === user._id;
//         allowedLike = (await canLike(id, user._id)) == 0;
//     }
//     ctx.render(detailsTemplate(el, isCreator, user, onDelete, likes, allowedLike, onLike));

//     async function onDelete() {
//         if (confirm('Are you sure you want to delete this item?')) {
//             await deleteItem(id);
//             ctx.page.redirect('/catalog');
//         }
//     }

//     async function onLike() {
//         await like({ bookId: id })
//         ctx.page.redirect('/details/' + id);
//     }
// }

