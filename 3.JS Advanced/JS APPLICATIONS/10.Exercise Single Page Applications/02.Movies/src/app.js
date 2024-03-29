// [x] correct html
// [x] create app.js
// [x]navigation bar
// []register user
// [x]login user
// [x]logout user
// [x]homepage
// [x]add movie
// [x]movie details
// []edit movie
// []like movie
// [x]delete movie

import { showCreateMoviePage } from "./createMovie.js";
import { showHomePage } from "./homePage.js";
import { showLogin } from "./login.js";
import { onLogout } from "./logout.js";
import { showRegister } from "./register.js";
import { showNavigation } from "./util.js";

const createSection = document.getElementById('add-movie');
const editSection = document.getElementById('edit-movie');


showNavigation();
await showHomePage();

const navigation = document.querySelector('nav');
const createBtn = document.querySelector('#add-movie-button a');

const routs = {
    '/homePage': showHomePage,
    '/logout': onLogout,
    '/login': showLogin,
    '/register': showRegister,
    '/createPage': showCreateMoviePage

}

navigation.addEventListener('click', (event) => pageViewer(event));
createBtn.addEventListener('click', (event) => pageViewer(event));

function pageViewer(event) {
    event.preventDefault();
    if (event.target.tagName === 'A' && event.target.href) {
        const url = new URL(event.target.href);
        const view = routs[url.pathname];
        if (typeof view == 'function') {
            view();
        }
    }
}

