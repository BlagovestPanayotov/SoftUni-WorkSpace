import { editItemById, getElementById } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";


const editTemplate = (el, onEdit) => html`
        <section @submit=${onEdit} id="editPage">
            <form class="editForm">
                <img src="./images/editpage-dog.jpg">
                <div>
                    <h2>Edit PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input .value=${el.name} name="name" id="name" type="text" value="Max">
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input .value=${el.breed} name="breed" id="breed" type="text" value="Shiba Inu">
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input .value=${el.age} name="age" id="age" type="text" value="2 years">
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input .value=${el.weight} name="weight" id="weight" type="text" value="5kg">
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input .value=${el.image} name="image" id="image" type="text" value="./image/dog.jpeg">
                    </div>
                    <button class="btn" type="submit">Edit Pet</button>
                </div>
            </form>
        </section>`

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const el = await getElementById(id);
    ctx.render(editTemplate(el, submitHandler(onEdit)));

    async function onEdit({ name, breed, age, weight, image }) {
        name = name.trim();
        breed = breed.trim();
        age = age.trim();
        weight = weight.trim();
        image = image.trim();

        if (name == '' || breed == '' || age == '' || weight == '' || image == '') {
            return alert('All fields are required!');
        }

        await editItemById(id, { name, breed, age, weight, image });
        ctx.page.redirect('/details/' + id);
    }
}