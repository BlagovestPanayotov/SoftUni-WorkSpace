import { editGame, getGame } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";


const editTemplate = (el, onEdit) => html`
        <section id="edit-page" class="auth">
            <form @submit=${onEdit} id="edit">
                <div class="container">

                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value=${el.title}>

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" value=${el.category}>

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" value=${el.maxLevel}>

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value=${el.imageUrl}>

                    <label for="summary">Summary:</label>
                    <textarea .value=${el.summary} name="summary" id="summary"></textarea>
                    <input class="btn submit" type="submit" value="Edit Game">

                </div>
            </form>
        </section>
`

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const el = await getGame(id);
    ctx.render(editTemplate(el, submitHandler(onEdit)));

    async function onEdit({ title, category, maxLevel, imageUrl, summary }) {
        title = title.trim();
        category = category.trim();
        maxLevel = maxLevel.trim();
        imageUrl = imageUrl.trim();
        summary = summary.trim();

        if (title == '' || category == '' || maxLevel == '' || imageUrl == '' || summary == '') {
            return alert('All fields are required!');
        }
        await editGame(id, { title, category, maxLevel, imageUrl, summary });
        ctx.page.redirect('/details/' + id);
    }
}