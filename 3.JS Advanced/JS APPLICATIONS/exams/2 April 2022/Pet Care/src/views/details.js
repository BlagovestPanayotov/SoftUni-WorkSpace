import { deleteItemById, getDonationsCount, getElementById, isDonated, makeDonation } from "../api/data.js";
import { html, nothing } from "../lib.js"
import { getUserData } from "../util.js";

const detailsTemplate = (el, onDelete, onDonation, userData, isOwner, hasDonated, countApplications) => html`
        <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src=${el.image}>
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${el.name}</h1>
                        <h3>Breed: ${el.breed}</h3>
                        <h4>Age: ${el.age}</h4>
                        <h4>Weight: ${el.weight}</h4>
                        <h4 class="donation">Donation: ${countApplications}$</h4>
                    </div>
                    ${buttonControl(el, onDelete, onDonation, userData, isOwner, hasDonated)}
                </div>
            </div>
        </section>`


function buttonControl(el, onDelete, onDonation, user, isCreator, userHasDonated) {
    if (!user) {
        return nothing;
    }

    if (isCreator) {
        return html`<div class="actionBtn">
                    <a href=${`/edit/${el._id}`} class="edit">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                    </div>`
    }

    if (userHasDonated == 0) {
        return html`<div class="actionBtn">
                    <a @click=${onDonation} href="javascript:void(0)" class="donate">Donate</a>
                    </div>`
    }

    return nothing;

}

export async function showDetails(ctx) {
    const el = await getElementById(ctx.params.id);
    const id = el._id;
    let isOwner;
    const userData = getUserData();
    if (userData) {
        isOwner = el._ownerId == userData._id;
    }
    const hasDonated = (await isDonated(id, userData._id)) == 1;
    const countApplications = await getDonationsCount(id);
    console.log(hasDonated,countApplications);

    ctx.render(detailsTemplate(el, onDelete, onDonation, userData, isOwner, hasDonated, countApplications * 100));

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

// const el = await getById(ctx.params.id);
//   const id = el._id;
//   let isOwner;
//   const userData = getUserData();
//   if (userData) {
//     isOwner = el._ownerId == userData._id;
//   }
//   const hasApplied = (await getAppliedByUser(id, userData._id)) == 1;
//   const countApplications = await getCountApplications(id);

//   ctx.render(detailsTemplate(el, isOwner, userData, id, onDelete, hasApplied, onApply, countApplications));

//   async function onDelete() {
//     await deleteById(id);
//     ctx.page.redirect('/catalog');
//   }

//   async function onApply() {
//     await postApply(id)
//     ctx.page.redirect('/details/' + id);
//   }


