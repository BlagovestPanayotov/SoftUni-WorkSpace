import { editItem, getById, } from "../api/data.js";
import { html } from "../lib.js";
import { alertMessage } from "../middleware.js";
import { submitHandler } from "../util.js";


const editTemplate = (el, onEdit) => html`
        <section id="editPage">
            <form @submit=${onEdit} class="theater-form">
                <h1>Edit Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input .value=${el.title} id="title" name="title" type="text" placeholder="Theater name" value="To Kill A Mockingbird">
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input .value=${el.date} id="date" name="date" type="text" placeholder="Month Day, Year" value="December 13, 2018">
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input .value=${el.author} id="author" name="author" type="text" placeholder="Author"
                        value="Aaron Sorkin, Fred Fordham">
                </div>
                <div>
                    <label for="description">Theater Description:</label>
                    <textarea id="description" name="description"
                        placeholder="Description">${el.description}</textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input .value=${el.imageUrl} id="imageUrl" name="imageUrl" type="text" placeholder="Image Url"
                        value="./images/Moulin-Rouge!-The-Musical.jpg">
                </div>
                <button class="btn" type="submit">Submit</button>
            </form>
        </section>
`

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const el = await getById(id);
    ctx.render(editTemplate(el, submitHandler(onEdit)));

    async function onEdit({ title, date, author, description, imageUrl }) {
        title = title.trim();
        date = date.trim();
        author = author.trim();
        description = description.trim();
        imageUrl = imageUrl.trim();

        if (title == '' || date == '' || author == '' || description == '' || imageUrl == '') {
            alertMessage('All fields are required!');
            return;
        }

        await editItem(id, { title, date, author, description, imageUrl });
        ctx.page.redirect('/catalog');

    }
}