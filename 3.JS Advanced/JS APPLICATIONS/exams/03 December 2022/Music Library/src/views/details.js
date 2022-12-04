import { addLike, deleteItem, getById, getLikes, hasLiked } from "../api/data.js";
import { html } from "../lib.js"
import { getUserData } from "../util.js";




const detailsTemplate = (el, isCreator, onDelete, likes, allowedLike, onLike) => html`
    <section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src=${el.imageUrl} alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${el.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${el.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${el.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${el.label}<span></p>
            <p><strong>Sales:</strong><span id="details-sales">${el.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">${likes}</span></div>
          <div id="action-buttons"> 
          ${buttonsTemplate(el, isCreator, allowedLike, onDelete, onLike)}
          </div>
        </div>
    </section>`


function buttonsTemplate(el, isCreator, allowedLike, onDelete, onLike) {
  if (isCreator) {
    return html` 
                <a href=${'/edit/' + el._id} id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
            `
  }

  if (allowedLike) {
    return html`<a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>`
  }
}

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
    allowedLike = (await hasLiked(id, user._id)) == 0;
  }
  ctx.render(detailsTemplate(el, isCreator, onDelete, likes, allowedLike, onLike));

  async function onDelete() {
    if (confirm('Are you sure you want to delete this item?')) {
      await deleteItem(id);
      ctx.page.redirect('/catalog');
    }
  }

  async function onLike() {
    await addLike({ albumId: id })
    ctx.page.redirect('/details/' + id);
  }
}
