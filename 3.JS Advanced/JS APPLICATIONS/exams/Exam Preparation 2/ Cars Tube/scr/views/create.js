import { createItem } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";


const editTemplate = (onCreate) => html`
        <section id="create-listing">
            <div class="container">
                <form @submit=${onCreate} id="create-form">
                    <h1>Create Car Listing</h1>
                    <p>Please fill in this form to create an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand">

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model">

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description">

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year">

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl">

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price">

                    <hr>
                    <input type="submit" class="registerbtn" value="Create Listing">
                </form>
            </div>
        </section>

`

export async function showCreate(ctx) {

    ctx.render(editTemplate(submitHandler(onCreate)));

    async function onCreate({ brand, model, description, year, imageUrl, price }) {
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

        await createItem({ brand, model, description, year, imageUrl, price });
        ctx.page.redirect('/catalog');

    }
}