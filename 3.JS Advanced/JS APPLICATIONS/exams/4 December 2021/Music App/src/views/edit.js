import { editItem, getById, } from "../api/data.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";


const editTemplate = (el, onEdit) => html`
        <section class="editPage">
            <form @submit=${onEdit}>
                <fieldset>
                    <legend>Edit Album</legend>

                    <div class="container">
                        <label for="name" class="vhide">Album name</label>
                        <input .value=${el.name} id="name" name="name" class="name" type="text" value="In These Silent Days">

                        <label for="imgUrl" class="vhide">Image Url</label>
                        <input .value=${el.imgUrl} id="imgUrl" name="imgUrl" class="imgUrl" type="text" value="./img/BrandiCarlile.png">

                        <label for="price" class="vhide">Price</label>
                        <input .value=${el.price} id="price" name="price" class="price" type="text" value="12.80">

                        <label for="releaseDate" class="vhide">Release date</label>
                        <input .value=${el.releaseDate} id="releaseDate" name="releaseDate" class="releaseDate" type="text" value="October 1, 2021">

                        <label for="artist" class="vhide">Artist</label>
                        <input .value=${el.artist} id="artist" name="artist" class="artist" type="text" value="Brandi Carlile">

                        <label for="genre" class="vhide">Genre</label>
                        <input .value=${el.genre} id="genre" name="genre" class="genre" type="text" value="Low Country Sound Music">

                        <label for="description" class="vhide">Description</label>
                        <textarea name="description" class="description" rows="10"
                            cols="10">${el.description}</textarea>

                        <button class="edit-album" type="submit">Edit Album</button>
                    </div>
                </fieldset>
            </form>
        </section>
`

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const el = await getById(id);
    ctx.render(editTemplate(el, submitHandler(onEdit)));

    async function onEdit({ name, imgUrl, price, releaseDate, artist, genre, description }) {
        name = name.trim()
        imgUrl = imgUrl.trim()
        price = price.trim()
        releaseDate = releaseDate.trim()
        artist = artist.trim()
        genre = genre.trim()
        description = description.trim()

        if (name == '' || imgUrl == '' || price == '' || releaseDate == '' || artist == '' || genre == '' || description == '') {
            alertMessage('All fields are required!');
            return;
        }

        await editItem(id, { name, imgUrl, price, releaseDate, artist, genre, description });
        ctx.page.redirect('/details/' + id);

    }
}