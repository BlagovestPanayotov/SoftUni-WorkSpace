import { editItem, getById, } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";


const editTemplate = (el, onEdit) => html`
        <section id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form @submit=${onEdit} class="edit-form">
            <input .value=${el.singer} type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input .value=${el.album} type="text" name="album" id="album-album" placeholder="Album" />
            <input .value=${el.imageUrl} type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input .value=${el.release} type="text" name="release" id="album-release" placeholder="Release date" />
            <input .value=${el.label} type="text" name="label" id="album-label" placeholder="Label" />
            <input .value=${el.sales} type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
          </form>
        </div>
      </section>
`

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const el = await getById(id);
    ctx.render(editTemplate(el, submitHandler(onEdit)));

    async function onEdit({ singer, album, imageUrl, release, label, sales }) {
        singer = singer.trim();
        album = album.trim();
        imageUrl = imageUrl.trim();
        release = release.trim();
        label = label.trim();
        sales = sales.trim();

        if (singer == '' || album == '' || imageUrl == '' || release == '' || label == '' || sales == '') {
            alertMessage('All fields are required!');
            return;
        }
        await editItem(id, { singer, album, imageUrl, release, label, sales });
        ctx.page.redirect('/details/'+id);
    }
}