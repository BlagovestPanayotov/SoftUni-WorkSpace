import { postNewElement } from "../api/data.js";
import { html } from "../library.js";
import { submitHandler } from "../util.js";


const createTemplate = (onPost) => html`
        <section @submit=${onPost} id="create">
          <div class="form">
            <h2>Create Offer</h2>
            <form class="create-form">
              <input type="text" name="title" id="job-title" placeholder="Title" />
              <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
              <input type="text" name="category" id="job-category" placeholder="Category" />
              <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50" ></textarea>
              <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4" cols="50" ></textarea>
              <input type="text" name="salary" id="job-salary" placeholder="Salary" />
              <button type="submit">post</button>
            </form>
          </div>
        </section>`

export function showCreate(ctx) {

    ctx.render(createTemplate(submitHandler(onPost)));

    async function onPost({ title, imageUrl, category, description, requirements, salary }) {
        title = title.trim();
        imageUrl = imageUrl.trim();
        category = category.trim();
        description = description.trim();
        requirements = requirements.trim();
        salary = salary.trim();
        if (title == '' || imageUrl == ''
            || category == '' || description == ''
            || requirements == '' || salary == '') {
            return alert('All fields are required!');
        }
        await postNewElement({ title, imageUrl, category, description, requirements, salary });
        ctx.page.redirect('/catalog');
    }
}