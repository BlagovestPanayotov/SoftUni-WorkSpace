import { getById, deleteItem, like, getLikes, canLike } from "../api/data.js";
import { html, nothing } from "../lib.js"
import { getUserData } from "../util.js";


const detailsTemplate = (el, isCreator, user, onDelete, likes, allowedLike, onLike) => html`
        <section id="details-page" class="details">
            <div class="book-information">
                <h3>${el.title}</h3>
                <p class="type">Type: ${el.type}</p>
                <p class="img"><img src=${el.imageUrl}></p>
                <div class="actions">
                    ${isCreator
        ? html`<a class="button" href=${'/edit/' + el._id}>Edit</a>
                                <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`
        : nothing}
                    ${user && !isCreator && allowedLike
        ? html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>`
        : nothing}
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: ${likes}</span>
                    </div>
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${el.description}</p>
            </div>
        </section>`

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const promises = [
        getById(id),
        getLikes(id),
    ];
    const user = getUserData();
    const [el, likes] = await Promise.all(promises);
    let isCreator = false;
    let allowedLike = false;
    if (user) {
        isCreator = el._ownerId === user._id;
        allowedLike = (await canLike(id, user._id)) == 0;
    }
    ctx.render(detailsTemplate(el, isCreator, user, onDelete, likes, allowedLike, onLike));

    async function onDelete() {
        if (confirm('Are you sure you want to delete this item?')) {
            await deleteItem(id);
            ctx.page.redirect('/catalog');
        }
    }

    async function onLike() {
        await like({ bookId: id })
        ctx.page.redirect('/details/' + id);
    }
}

// _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8",
//  title: "A Court of Thorns and Roses",
//  description: "Feyre's survival rests upon her ability to hunt and kill – the forest where she lives is a cold, bleak place in the long winter months. So when she spots a deer in the forest being pursued by a wolf, she cannot resist fighting it for the flesh. But to do so, she must kill the predator and killing something so precious comes at a price ...",
//   imageUrl: "/images/book1.png",
//  type: "Fiction",
//  _createdOn: 1617797078108,
//  _id: "b559bd24-5fb6-4a42-bc48-40c17dea649d"