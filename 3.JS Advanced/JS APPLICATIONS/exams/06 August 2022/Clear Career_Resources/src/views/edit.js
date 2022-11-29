import { html } from "../library.js";
import { editElementById, getById } from "../api/data.js";
import { submitHandler } from "../util.js";


const editTemplate = (el, onEdit) => html`
<section id="edit">
          <div class="form">
            <h2>Edit Offer</h2>
            <form @submit=${onEdit} class="edit-form">
              <input .value=${el.title} type="text" name="title" id="job-title" placeholder="Title" />
              <input .value=${el.imageUrl} type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
              <input .value=${el.category} type="text" name="category" id="job-category" placeholder="Category" />
              <textarea .value=${el.description} id="job-description" name="description" placeholder="Description" rows="4" cols="50" ></textarea>
              <textarea .value=${el.requirements} id="job-requirements" name="requirements" placeholder="Requirements" rows="4" cols="50" ></textarea>
              <input .value=${el.salary} type="text" name="salary" id="job-salary" placeholder="Salary" />
              <button type="submit">post</button>
            </form>
          </div>
        </section>`

export async function showEdit(ctx) {
  const id = ctx.params.id;
  const el = await getById(id);

  ctx.render(editTemplate(el, submitHandler(onEdit)));

  async function onEdit({ title, imageUrl, category, description, requirements, salary }) {
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
    await editElementById(id, { title, imageUrl, category, description, requirements, salary });
    ctx.page.redirect('/details/' + id);
  }
}