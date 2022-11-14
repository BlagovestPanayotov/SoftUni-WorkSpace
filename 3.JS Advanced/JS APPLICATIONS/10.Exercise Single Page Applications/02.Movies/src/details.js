import { deleteMovie } from "./delete.js";
import { editMovie } from "./edit.js";
import { likeMovie } from "./like.js";
import { loading, showView } from "./util.js";

const detailsSection = document.getElementById('movie-example');
const dataUser = JSON.parse(sessionStorage.getItem('dataUser'));
const homeSection = document.getElementById('home-page');


export async function showDetails(event) {

    try {
        if (event.target.tagName === 'BUTTON') {
            if (!dataUser) {
                throw new Error('You have to be a user to see the movie details!')
            }
            showView(detailsSection);
            await getMovie(event.target.dataset.id);

            const buttonsContainer = document.querySelector('.col-md-4.text-center');
            buttonsContainer.addEventListener('click', onClick);
        }
    } catch (err) {
        alert(err.message);
        showView(homeSection);
        throw err;
    }

}

async function getMovie(id) {

    detailsSection.replaceChildren(loading());
    const url = 'http://localhost:3030/data/movies/' + id;
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(response.message)
    }
    detailsSection.replaceChildren(createMovie(data));

}

function createMovie(data) {
    const movieEl = document.createElement('div');
    movieEl.setAttribute('class', 'container');
    movieEl.setAttribute('data-id', data._id);
    movieEl.innerHTML = `
        <div class="row bg-light text-dark">
        <h1>Movie title: ${data.title}</h1>

        <div class="col-md-8">
            <img
            class="img-thumbnail"
            src=${data.img}
            alt="Movie"
            />
        </div>
        <div class="col-md-4 text-center" data-id = "${data._id}">
            <h3 class="my-3">Movie Description</h3>
            <p>${data.description}</p>
            <a class="btn btn-danger" href="/delete">Delete</a>
            <a class="btn btn-warning" href="/edit">Edit</a>
            <a class="btn btn-primary" href="/like">Like</a>
            <span class="enrolled-span">Liked 1</span>
        </div>
        </div>`

    return (movieEl);
}

const routs = {
    "/delete": deleteMovie,
    "/edit": editMovie,
    "/like": likeMovie
}

function onClick(event) {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        const id = event.target.parentElement.dataset.id;
        const url = new URL(event.target.href);
        routs[url.pathname](id);
    }
}