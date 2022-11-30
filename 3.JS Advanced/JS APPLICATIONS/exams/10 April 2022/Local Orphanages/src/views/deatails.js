import { deleteItemById, getDonationsCount, getElementById, hasDonated, makeDonation } from "../api/data.js";
import { html, nothing } from "../lib.js"
import { getUserData } from "../util.js";


const detailsTemplate = (el, user, isCreator, onDelete, onDonation, getCount, donated) => html`
        <section id="details-page">
            <h1 class="title">Post Details</h1>

            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src=${el.imageUrl} alt="Material Image" class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${el.title}</h2>
                        <p class="post-description">Description: ${el.description}</p>
                        <p class="post-address">Address: ${el.address}</p>
                        <p class="post-number">Phone number: ${el.phone}</p>
                        <p class="donate-Item">Donate Materials: ${getCount}</p>
                        ${buttonControl(el, user, isCreator, onDelete, onDonation, getCount, donated)}
                    </div>
                </div>
            </div>
        </section>`


function buttonControl(el, user, isCreator, onDelete, onDonation, getCount, donated) {
    if (!user) {
        return nothing;
    }

    if (isCreator) {
        return html`<div class="btns">
        <a href=${'/edit/' + el._id} class="edit-btn btn">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>
        </div>`
    }

    if (donated == 0) {
        return html`<div class="btns">
        <a @click=${onDonation} href="javascript:void(0)" class="donate-btn btn">Donate</a></div>`
    }

    return nothing;

}

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const promises = [
        getElementById(id),
        getDonationsCount(id),
    ];
    const user = getUserData();

    let isCreator;
    if (user) {
        isCreator = el._ownerId === user._id;
        promises.push(hasDonated(id, user._id));
    }
    const [el, getCount, donated] = await Promise.all(promises);
    ctx.render(detailsTemplate(el, user, isCreator, onDelete, onDonation, getCount, donated));

    async function onDelete() {
        if (confirm('Are you sure you want to delete this item?')) {
            await deleteItemById(id);
            ctx.page.redirect('/');
        }
    }

    async function onDonation() {
        await makeDonation(id);
        ctx.page.redirect('/details/' + id);
    }
}

