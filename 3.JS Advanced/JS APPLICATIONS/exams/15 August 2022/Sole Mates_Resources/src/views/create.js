import { addElement } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";


const createTemplate = (onPost) => html`
        <section @submit=${onPost} id="create">
          <div class="form">
            <h2>Add item</h2>
            <form class="create-form">
              <input
                type="text"
                name="brand"
                id="shoe-brand"
                placeholder="Brand"
              />
              <input
                type="text"
                name="model"
                id="shoe-model"
                placeholder="Model"
              />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                placeholder="Image url"
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                placeholder="Release date"
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                placeholder="Designer"
              />
              <input
                type="text"
                name="value"
                id="shoe-value"
                placeholder="Value"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>`

export function showCreate(ctx) {

    ctx.render(createTemplate(submitHandler(onPost)));

    async function onPost(data) {
        const hasEmpty = Object.values(data).some(x => x.trim() == '');
        if (hasEmpty) {
            return alert('All fields are required!');
        }
        await addElement({ brand: data.brand, model: data.model, imageUrl: data.imageUrl, release: data.release, designer: data.designer, value: data.value, });
        ctx.page.redirect('/catalog');
    }
}