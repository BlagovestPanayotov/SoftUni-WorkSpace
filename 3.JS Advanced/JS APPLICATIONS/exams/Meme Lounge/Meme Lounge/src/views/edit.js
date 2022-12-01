import { editItem, getById, } from "../api/data.js";
import { html } from "../lib.js";
import { alertMessage } from "../middleware.js";
import { submitHandler } from "../util.js";


const editTemplate = (el, onEdit) => html`
        <section id="edit-meme">
            <form @submit=${onEdit} id="edit-form">
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input .value=${el.title} id="title" type="text" placeholder="Enter Title" name="title">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description">
                        ${el.description} 
                        </textarea>
                    <label for="imageUrl">Image Url</label>
                    <input .value=${el.imageUrl} id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl">
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>
`

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const el = await getById(id);
    ctx.render(editTemplate(el, submitHandler(onEdit)));

    async function onEdit({ title, description, imageUrl }) {
        title = title.trim();
        description = description.trim();
        imageUrl = imageUrl.trim();

        if (title == '' || description == '' || imageUrl == '') {
            alertMessage('All fields are required!');
            return;
        }

        await editItem(id, { title, description, imageUrl });
        ctx.page.redirect('/details/' + id);
    }
}