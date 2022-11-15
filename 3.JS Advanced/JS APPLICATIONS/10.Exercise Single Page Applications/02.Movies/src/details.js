import { deleteMovie } from "./delete.js";
import { editMovie } from "./edit.js";
import { loading, showView } from "./util.js";

const detailsSection = document.getElementById('movie-example');
const homeSection = document.getElementById('home-page');


export async function showDetails(event) {
    const dataUser = JSON.parse(sessionStorage.getItem('dataUser'));

    try {
        if (event.target.tagName === 'BUTTON') {
            if (!dataUser) {
                throw new Error('You have to be a user to see the movie details!')
            }
            showView(detailsSection);
            await displayMovie(event.target.dataset.id, dataUser);

            const buttonsContainer = document.querySelector('.col-md-4.text-center');
            buttonsContainer.addEventListener('click', onClick); //the event is added here secured against double event listener
        }
    } catch (err) {
        alert(err.message);
        showView(homeSection);
        throw err;
    }

}

async function displayMovie(id, dataUser) {
    const [data, likes, myLike] = await Promise.all([
        getMovie(id),
        getLikes(id),
        getOwnLike(id, dataUser._id)
    ]);

    detailsSection.replaceChildren(createMovie(data, likes, myLike, dataUser));

}

async function getMovie(id) {

    detailsSection.replaceChildren(loading());
    const url = 'http://localhost:3030/data/movies/' + id;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(response.message)
    }

    return data;

}

function createMovie(data, likes, myLike, dataUser) {
    const movieEl = document.createElement('div');
    movieEl.setAttribute('class', 'container');
    const title = data.title;
    const img = data.img;
    const id = data._id;
    const ownerId = data._ownerId;
    const description = data.description;

    movieEl.innerHTML = `
        <div class="row bg-light text-dark">
        <h1>Movie title: ${title}</h1>

        <div class="col-md-8">
            <img
            class="img-thumbnail"
            src=${img}
            alt="Movie"
            />
        </div>
        <div class="col-md-4 text-center" data-id = "${id}">
            <h3 class="my-3">Movie Description</h3>
            <p>${description}</p>
            ${dataUser && dataUser._id == ownerId ? `
            <a class="btn btn-danger" href="/delete">Delete</a>
            <a class="btn btn-warning" href="/edit">Edit</a>` :
            dataUser && myLike === false ?
                `<a class="btn btn-primary" href="/like">Like</a>` : ''}
            <span class="enrolled-span" data-id="count-likes">Liked ${likes}</span>
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
        routs[url.pathname](event, id);
    }
    if (event.target.dataset.id === 'count-likes') {
        console.log('itWorks');
    }
}

export async function getLikes(id) {
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
    const data = await response.json();

    return data;
}

export async function getOwnLike(id, userId) {
    if (!userId) {
        return false
    } else {
        const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`);
        const result = await response.json();

        return result.length > 0;
    }
}

export async function likeMovie(event, id) {
    const dataUser = JSON.parse(sessionStorage.getItem('dataUser'));

    const url = 'http://localhost:3030/data/likes';
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': dataUser.token,
        },
        body: JSON.stringify({ movieId: id })
    });
    const result = await response.json();
    console.log(result);
    showView(detailsSection);
    await displayMovie(result.movieId, dataUser)
}
