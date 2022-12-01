import { getById, deleteItem, addLike, getLikes, hasLiked } from "../api/data.js";
import { html, nothing } from "../lib.js"
import { getUserData } from "../util.js";




const detailsTemplate = (el, isCreator, user, onDelete, likesCount,canLike, onLike) => html`
        <section id="detailsPage">
            <div id="detailsBox">
                <div class="detailsInfo">
                    <h1>Title: ${el.title}</h1>
                    <div>
                        <img src=${el.imageUrl}/>
                    </div>
                </div>

                <div class="details">
                    <h3>Theater Description</h3>
                    <p>${el.description}</p>
                    <h4>Date: ${el.date}</h4>
                    <h4>Author: ${el.author}</h4>
                    ${user
                        ? html`<div class="buttons"> 
                            ${isCreator 
                                    ? html`<div class="buttons">
                                            <a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
                                            <a class="btn-edit" href=${'/edit/' + el._id}>Edit</a>`
                                    : canLike 
                                            ?html`<a @click=${onLike} class="btn-like" href="javascript:void(0)">Like</a>`
                                            :nothing}
                                    </div>`
                        : nothing}
                    
                    <p class="likes">Likes: ${likesCount}</p>
                </div>
            </div>
        </section>
`

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const user = getUserData();
    const [el, likesCount] = await Promise.all([
        getById(id),
        getLikes(id),

    ])
    let isCreator = false;
    let canLike;
    if (user) {
        isCreator = el._ownerId === user._id;
        canLike = (await hasLiked(id, user._id)) == 0;
    }
    ctx.render(detailsTemplate(el, isCreator, user, onDelete, likesCount, canLike,onLike));

    async function onDelete() {
        if (confirm('Are you sure you want to delete this item?')) {
            await deleteItem(id);
            ctx.page.redirect('/catalog');
        }
    }

    async function onLike(event) {
        event.target.style.display = 'none';
        await addLike({ theaterId: id });
        ctx.page.redirect('/details/' + id);
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

