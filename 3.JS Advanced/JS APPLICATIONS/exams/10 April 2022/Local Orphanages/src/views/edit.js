import { editItemById, getElementById } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";


const editTemplate = (el, onEdit) => html`
        <section id="edit-page" class="auth">
            <form @submit=${onEdit} id="edit">
                <h1 class="title">Edit Post</h1>

                <article class="input-group">
                    <label for="title">Post Title</label>
                    <input .value=${el.title} type="title" name="title" id="title" value="">
                </article>

                <article class="input-group">
                    <label for="description">Description of the needs </label>
                    <input .value=${el.description} type="text" name="description" id="description" value="">
                </article>

                <article class="input-group">
                    <label for="imageUrl"> Needed materials image </label>
                    <input .value=${el.imageUrl} type="text" name="imageUrl" id="imageUrl" value="">
                </article>

                <article class="input-group">
                    <label for="address">Address of the orphanage</label>
                    <input .value=${el.address} type="text" name="address" id="address" value="">
                </article>

                <article class="input-group">
                    <label for="phone">Phone number of orphanage employee</label>
                    <input .value=${el.phone} type="text" name="phone" id="phone" value="">
                </article>

                <input type="submit" class="btn submit" value="Edit Post">
            </form>
        </section>`

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const el = await getElementById(id);
    ctx.render(editTemplate(el, submitHandler(onEdit)));

    async function onEdit({ title, description, imageUrl, address, phone }) {
        title = title.trim();
        description = description.trim();
        imageUrl = imageUrl.trim();
        address = address.trim();
        phone = phone.trim();

        if (title == '' || description == '' || imageUrl == '' || address == '' || phone == '') {
            return alert('All fields are required!');
        }

        await editItemById(id, { title, description, imageUrl, address, phone });
        ctx.page.redirect('/details/' + id);
    }
}