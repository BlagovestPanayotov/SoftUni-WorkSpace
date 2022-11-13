import { showLogin } from "./login.js";
import { showNavigation } from "./util.js";

const logoutBtn = document.querySelector('#logout-btn');

export async function onLogout() {
    logoutBtn.textContent = 'Logout...';
    logoutBtn.disabled = true;
    try {
        const userData = JSON.parse(sessionStorage.getItem('dataUser'));

        const url = 'http://localhost:3030/users/logout'
        const res = await fetch(url, {
            method: 'get',
            headers: {
                'X-Authorization': userData.token
            }
        });

        if (res.status !== 204) {
            throw new Error('Unsuccessful logout!')
        }

        sessionStorage.clear();
        logoutBtn.textContent = 'Logout';
        logoutBtn.disabled = false;

    } catch (err) {
        logoutBtn.textContent = 'Logout';
        logoutBtn.disabled = false;
        alert(err.message);
        throw err;
    }

    showNavigation();
    showLogin()
}