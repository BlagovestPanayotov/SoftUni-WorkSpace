import { deleteItem, getById } from "../api/data.js";
import { html, nothing } from "../lib.js"
import { getUserData } from "../util.js";




const detailsTemplate = (el, isCreator, onDelete) => html`
          <section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src=${el.imageUrl}>
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${el.brand}</li>
                    <li><span>Model:</span>${el.model}</li>
                    <li><span>Year:</span>${el.year}</li>
                    <li><span>Price:</span>${el.price}$</li>
                </ul>

                <p class="description-para">${el.description}</p>

                ${isCreator
                    ? html`<div class="listings-buttons">
                                <a href=${'/edit/' + el._id} class="button-list">Edit</a>
                                <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>
                            </div>`
                    : nothing}
                
            </div>
        </section>
`


export async function showDetails(ctx) {
    const user = getUserData();
    // if (!user) return ctx.page.redirect('/');
    const id = ctx.params.id;
    const el = await getById(id);
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
// _createdOn: 1616162253496
// ​
// _id: "3987279d-0ad4-4afb-8ca9-5b256ae3b298"
// ​
// _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8"
// ​
// brand: "Audi"
// ​
// description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
// ​
// imageUrl: "/images/audia3.jpg"
// ​
// model: "A3"
// ​
// price: 25000
// ​
// year: 2018











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

