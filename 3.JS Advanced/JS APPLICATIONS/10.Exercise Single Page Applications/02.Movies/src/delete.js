import { loading, showView } from "./util.js";

const homeSection = document.getElementById('home-page');
const movieList = document.getElementById('movies-list');

export async function deleteMovie(event, id) {
    event.preventDefault();
    event.target.parentElement.replaceChildren(loading('Deleting...'));
    try {
        const url = 'http://localhost:3030/data/movies/' + id;
        const response = await fetch(url, {
            method: 'delete',
            headers: {
                'X-Authorization': JSON.parse(sessionStorage.getItem('dataUser')).token
            }
        });
        if (!response.ok) {
            throw new Error(response.message)
        };

        movieList.querySelector(`[data-id="${id}"]`).remove();
        showView(homeSection);


    } catch (err) {
        alert(err.message);
        throw err;
    }
}