import { login } from "./api/users.js";

const section = document.getElementById('loginPage');

const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;

export function showLogin(context) {
    ctx = context;
    context.showSection(section)
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
// debugger;
    const email = formData.get('email');
    const password = formData.get('password');
    if (email == '' || password == '') {
        alert('All fields are required!');
        return;
    }
    await login(email, password);
    
    form.reset();

    ctx.updateNav();

    ctx.goto('/home');

}
