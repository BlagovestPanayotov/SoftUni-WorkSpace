import { createNew } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";

const createTemplate = (onCreate) => html`
        <section id="create-page" class="create">
            <form @submit=${onCreate} id="create-form" action="" method="">
                <fieldset>
                    <legend>Add new Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" placeholder="Title">
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image">
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type">
                                <option value="Fiction">Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Add Book">
                </fieldset>
            </form>
        </section>
`;

export function showCreate(ctx) {
    ctx.render(createTemplate(submitHandler(onCreate)));

    async function onCreate({ description, imageUrl, title, type }) {
        description = description.trim();
        imageUrl = imageUrl.trim();
        title = title.trim();
        type = type.trim();

        if (description == '' || imageUrl == '' || title == '' || type == '') {
            return alert('All fields are required!');
        }

        await createNew({ description, imageUrl, title, type });
        ctx.page.redirect('/catalog');

    }
}
