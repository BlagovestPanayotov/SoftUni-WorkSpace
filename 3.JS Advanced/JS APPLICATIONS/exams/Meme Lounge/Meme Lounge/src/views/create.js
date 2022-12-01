import { createItem } from "../api/data.js";
import { html } from "../lib.js";
import { alertMessage } from "../middleware.js";
import { submitHandler } from "../util.js";


const editTemplate = (onCreate) => html`
        <section id="create-meme">
            <form @submit=${onCreate} id="create-form">
                <div class="container">
                    <h1>Create Meme</h1>
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                    <label for="imageUrl">Meme Image</label>
                    <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                    <input type="submit" class="registerbtn button" value="Create Meme">
                </div>
            </form>
        </section>
`

export async function showCreate(ctx) {

    ctx.render(editTemplate(submitHandler(onCreate)));

    async function onCreate({ title, description, imageUrl }) {
        title = title.trim();
        description = description.trim();
        imageUrl = imageUrl.trim();

        if (title == '' || description == '' || imageUrl == '') {
            alertMessage('All fields are required!');
            return;
        }

        await createItem({ title, description, imageUrl });
        ctx.page.redirect('/catalog');
    
    }
}