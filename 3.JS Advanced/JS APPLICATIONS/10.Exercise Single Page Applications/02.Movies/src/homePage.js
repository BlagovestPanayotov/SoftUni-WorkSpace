import { showDetails } from "./details.js";
import { loading, showView } from "./util.js";

const homeSection = document.getElementById('home-page');
const movieList = document.getElementById('movies-list');
movieList.addEventListener('click', showDetails);

export async function showHomePage() {
    showView(homeSection);
    await displayMovies();
}

async function displayMovies() {

    movieList.replaceChildren(loading());

    const response = await fetch('http://localhost:3030/data/movies');
    const data = await response.json();

    movieList.replaceChildren(...data.map(createMovies));

}

function createMovies(data) {
    const newElement = document.createElement('div');
    newElement.setAttribute('data-id', data._id);
    newElement.setAttribute('class', 'card mb-4');
    newElement.innerHTML = `
        <img class="card-img-top" src=${data.img}
                alt="Card image cap" width="400">
        <div class="card-body">
            <h4 class="card-title">${data.title}</h4>
        </div>
        <div class="card-footer" style = "display: ${sessionStorage.getItem('dataUser') ? 'block' : 'none'}">
            <a href="#/details/6lOxMFSMkML09wux6sAF">
                <button type="button" class="btn btn-info" data-id=${data._id}>Details</button>
            </a>
        </div>`
    return newElement
}