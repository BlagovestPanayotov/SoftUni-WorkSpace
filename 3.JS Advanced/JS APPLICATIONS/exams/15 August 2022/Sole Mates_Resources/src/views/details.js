import { deleteById, getById } from "../api/data.js";
import { html, nothing } from "../lib.js";
import { getUserData } from "../util.js";


const detailsTemplate = (el, isOwner, onDelete) => html`
        <section id="details">
          <div id="details-wrapper">
            <p id="details-title">Shoe Details</p>
            <div id="img-wrapper">
              <img src=${el.imageUrl} alt="example1" />
            </div>
            <div id="info-wrapper">
              <p>Brand: <span id="details-brand">${el.brand}</span></p>
              <p>
                Model: <span id="details-model">${el.model}</span>
              </p>
              <p>Release date: <span id="details-release">${el.release}</span></p>
              <p>Designer: <span id="details-designer">${el.designer}</span></p>
              <p>Value: <span id="details-value">${el.value}</span></p>
            </div>

            ${isOwner
    ? html`<div id="action-buttons">
              <a href="/edit/${el._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href='javascript:void(0)' id="delete-btn">Delete</a>
            </div>`
    : nothing}
          </div>
        </section>`

export async function showDetails(ctx) {

  const id = ctx.params.id;
  const el = await getById(id);
  
  let isOwner = false;
  const user = getUserData();
  if (user) {
    isOwner = user._id === el._ownerId;
  }
  ctx.render(detailsTemplate(el, isOwner, onDelete))

  async function onDelete() {
    const confirmed = confirm('Are you sure you want to delete this item?');
    if (!confirmed) return;
    await deleteById(id);
    ctx.page.redirect('/catalog');
  }
}


