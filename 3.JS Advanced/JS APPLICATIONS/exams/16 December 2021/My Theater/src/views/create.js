import { createItem } from "../api/data.js";
import { html } from "../lib.js";
import { alertMessage } from "../middleware.js";
import { submitHandler } from "../util.js";


const editTemplate = (onCreate) => html`
        <section id="createPage">
            <form @submit=${onCreate} class="create-form">
                <h1>Create Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Theater name" value="">
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input id="date" name="date" type="text" placeholder="Month Day, Year">
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input id="author" name="author" type="text" placeholder="Author">
                </div>
                <div>
                    <label for="description">Description:</label>
                    <textarea id="description" name="description" placeholder="Description"></textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value="">
                </div>
                <button class="btn" type="submit">Submit</button>
            </form>
        </section>
`

export async function showCreate(ctx) {

    ctx.render(editTemplate(submitHandler(onCreate)));

    async function onCreate({ title, date, author, description, imageUrl }) {
        title = title.trim();
        date = date.trim();
        author = author.trim();
        description = description.trim();
        imageUrl = imageUrl.trim();

        if (title == '' || date == '' || author == ''|| description == ''|| imageUrl == '') {
            alertMessage('All fields are required!');
            return;
        }

        await createItem({ title, date, author, description, imageUrl });
        ctx.page.redirect('/catalog');

    }
}