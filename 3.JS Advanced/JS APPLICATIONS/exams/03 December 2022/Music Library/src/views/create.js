import { createItem } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";


const editTemplate = (onCreate) => html`
        <section id="create">
        <div class="form">
          <h2>Add Album</h2>
          <form @submit=${onCreate} class="create-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
          </form>
        </div>
      </section>


`

export async function showCreate(ctx) {

    ctx.render(editTemplate(submitHandler(onCreate)));

    async function onCreate({ singer, album, imageUrl, release, label, sales }) {
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

        await createItem({ singer, album, imageUrl, release, label, sales });
        ctx.page.redirect('/catalog');

    }
}