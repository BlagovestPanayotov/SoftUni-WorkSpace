import { showHomePage } from "./homePage.js";
import { showNavigation, showView } from "./util.js";

const loginSection = document.getElementById('form-login');
const form = loginSection.querySelector('form');
const btn = form.querySelector('button');

export function showLogin() {
    showView(loginSection);
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const email = formData.get('email');
    const password = formData.get('password');


    await onLogin(email, password);
    form.reset();
    showHomePage();
    showNavigation();

});

async function onLogin(email, password) {
    btn.textContent = 'Login...';
    btn.disabled = true;

    try {
        if (!email || !password) {
            throw new Error('All fields are required!');
        }
        const url = 'http://localhost:3030/users/login';

        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();

        btn.textContent = 'Login';
        btn.disabled = false;

        if (!response.ok) {
            throw new Error(result.message);
        }
        const dataUser = {
            _id: result._id,
            token: result.accessToken,
            email: result.email
        }

        sessionStorage.setItem('dataUser', JSON.stringify(dataUser));

    } catch (err) {
        alert(err.message);
        throw err;
    }



}