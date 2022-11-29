import { deleteById, getById, getAppliedByUser, postApply, getCountApplications } from "../api/data.js";
import { html, nothing } from "../library.js";
import { getUserData } from "../util.js";


const detailsTemplate = (el, isOwner, userData, id, onDelete, hasApplied, onApply, countApplications) => html`
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${el.imageUrl} alt="example1" />
            <p id="details-title">${el.title}</p>
            <p id="details-category">
              Category: <span id="categories">${el.category}</span>
            </p>
            <p id="details-salary">
              Salary: <span id="salary-number">${el.salary}</span>
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span>${el.description}</span>
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${el.requirements}</span>
              </div>
            </div>
            <p>Applications: <strong id="applications">${countApplications}</strong></p>

            ${userData
    ? html`<div id="action-buttons">
                ${isOwner
        ? html`<a href=${'/edit/' + id} id="edit-btn">Edit</a>
              <a @click=${onDelete} href='javascript:void(0)' id="delete-btn">Delete</a>`
        : hasApplied
          ? nothing
          : html`<a @click=${onApply} href='javascript:void(0)' id="apply-btn">Apply</a>`
      }
            </div > `
    : nothing}
            
          </div>
        </section>`

export async function showDetails(ctx) {
  const el = await getById(ctx.params.id);
  const id = el._id;
  let isOwner;
  const userData = getUserData();
  if (userData) {
    isOwner = el._ownerId == userData._id;
  }
  const hasApplied = (await getAppliedByUser(id, userData._id)) == 1;
  const countApplications = await getCountApplications(id);

  ctx.render(detailsTemplate(el, isOwner, userData, id, onDelete, hasApplied, onApply, countApplications));

  async function onDelete() {
    await deleteById(id);
    ctx.page.redirect('/catalog');
  }

  async function onApply() {
    await postApply(id)
    ctx.page.redirect('/details/' + id);
  }

}
