import { post } from "../api/api.js";
import { editById, getById } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";


const editTemplate = (el, onSubmit) => html`
        <section  @submit=${onSubmit} id="edit">
          <div class="form">
            <h2>Edit item</h2>
            <form class="edit-form">
              <input
                type="text"
                name="brand"
                id="shoe-brand"
                placeholder="Brand"
                .value=${el.brand}
              />
              <input
                type="text"
                name="model"
                id="shoe-model"
                placeholder="Model"
                .value=${el.model}
              />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                placeholder="Image url"
                .value=${el.imageUrl}
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                placeholder="Release date"
                .value=${el.release}
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                placeholder="Designer"
                .value=${el.designer}
              />
              <input
                type="text"
                name="value"
                id="shoe-value"
                placeholder="Value"
                .value=${el.value}
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>`

export async function showEdit(ctx) {
  const id = ctx.params.id;

  const el = await getById(id);
  ctx.render(editTemplate(el, submitHandler(onPost)));

  async function onPost(data) {
    const hasEmpty = Object.values(data).some(x => x.trim() == '');
    if (hasEmpty) {
      return alert('All fields are required!');
    }
    await editById(id, { brand: data.brand, model: data.model, imageUrl: data.imageUrl, release: data.release, designer: data.designer, value: data.value, });
    ctx.page.redirect('/details/' + id);
  }
}