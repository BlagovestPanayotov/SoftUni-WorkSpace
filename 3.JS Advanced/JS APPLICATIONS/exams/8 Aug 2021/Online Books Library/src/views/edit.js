import { editItem, getById,  } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";


const editTemplate = (el, onEdit) => html`
        <section id="edit-page" class="edit">
            <form @submit=${onEdit} id="edit-form" action="#" method="">
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" value=${el.title}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description"
                                id="description">${el.description}</textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" value=${el.imageUrl}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type" .value=${el.type} value="Fiction">
                                <option value="Fiction" selected>Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Save">
                </fieldset>
            </form>
        </section>
`

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const el = await getById(id);
    ctx.render(editTemplate(el, submitHandler(onEdit)));

    async function onEdit({ description, imageUrl, title, type }) {
        description = description.trim();
        imageUrl = imageUrl.trim();
        title = title.trim();
        type = type.trim();

        if (description == '' || imageUrl == '' || title == '' || type == '') {
            return alert('All fields are required!');
        }

        await editItem(id, { description, imageUrl, title, type });
        ctx.page.redirect('/details/' + id);
    }
}