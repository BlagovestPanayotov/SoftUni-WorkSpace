import { editItem, getById, } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";


const editTemplate = (el, onEdit) => html`
        <section id="edit-listing">
            <div class="container">

                <form @submit=${onEdit} id="edit-form">
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input .value=${el.brand} type="text" placeholder="Enter Car Brand" name="brand" value="">

                    <p>Car Model</p>
                    <input .value=${el.model} type="text" placeholder="Enter Car Model" name="model" value="">

                    <p>Description</p>
                    <input .value=${el.description} type="text" placeholder="Enter Description" name="description" value="">

                    <p>Car Year</p>
                    <input .value=${el.year} type="number" placeholder="Enter Car Year" name="year" value="">

                    <p>Car Image</p>
                    <input .value=${el.imageUrl} type="text" placeholder="Enter Car Image" name="imageUrl" value="">

                    <p>Car Price</p>
                    <input .value=${el.price} type="number" placeholder="Enter Car Price" name="price" value="">

                    <hr>
                    <input type="submit" class="registerbtn" value="Edit Listing">
                </form>
            </div>
        </section>
`

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const el = await getById(id);
    ctx.render(editTemplate(el, submitHandler(onEdit)));

    async function onEdit({ brand, model, description, year, imageUrl, price }) {
        brand = brand.trim()
        model = model.trim()
        description = description.trim()
        year = Number(year.trim())
        imageUrl = imageUrl.trim()
        price = Number(price.trim())

        if (brand == '' || model == '' || description == '' || year == '' || imageUrl == '' || price == '') {
            alertMessage('All fields are required!');
            return;
        }

        await editItem(id, { brand, model, description, year, imageUrl, price });
        ctx.page.redirect('/details/'+id);

    }
}