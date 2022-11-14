import { showHomePage } from "./homePage.js";
import { showView } from "./util.js";

const createSection = document.getElementById('add-movie');
const form = document.getElementById('add-movie-form');
form.addEventListener('submit', onSubmit);
const button = form.querySelector('button');


export function showCreateMoviePage() {
    form.reset();
    showView(createSection);
    button.textContent = 'Submit';
    button.disabled = false;
}

async function onSubmit(event) {
    event.preventDefault();
    button.textContent = 'Submitting...';
    button.disabled = true;
    const formData = new FormData(form);

    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('img');

    const userData = JSON.parse(sessionStorage.getItem('dataUser'));

    try {

        if (title == '' || description == '' || img == '') {
            throw new Error('All fields are required!');
        }

        if (!userData) {
            throw new Error('You must be user, if you want to add movies!');
        }

        const url = 'http://localhost:3030/data/movies';

        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body:JSON.stringify({title,description,img})
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message);
        }

        showHomePage();

    } catch (err) {
        alert(err.message);
        throw err;
    }


}