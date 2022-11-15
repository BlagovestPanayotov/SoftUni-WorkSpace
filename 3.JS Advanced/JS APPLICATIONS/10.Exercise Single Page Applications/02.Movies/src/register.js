import { showHomePage } from "./homePage.js";
import { showNavigation, showView } from "./util.js";

const registerSection = document.getElementById('form-sign-up');
const form = registerSection.querySelector('form');

export function showRegister() {
    showView(registerSection);
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('repeatPassword');

    try {
        if (email == '' || password == '' || repass == '') {
            throw new Error('All fields are required!');
        }
        if (password.length < 6) {
            throw new Error('Password mush be at least 6 characters!');
        }
        if (password !== repass) {
            throw new Error('Passwords doesn\'t match!');
        }

        const url = 'http://localhost:3030/users/register';
        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }
        const dataUser = {
            _id: data._id,
            token: data.accessToken,
            email: data.email
        }

        sessionStorage.setItem('dataUser', JSON.stringify(dataUser));

        form.reset();
        showHomePage();
        showNavigation();

    } catch (err) {
        alert(err.message)
    }

});
