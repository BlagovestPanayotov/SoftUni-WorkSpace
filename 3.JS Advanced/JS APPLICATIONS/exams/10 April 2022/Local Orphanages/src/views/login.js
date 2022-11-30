import { login } from "../api/auth.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";


const loginTemplate = (onLogin) => html`
        <section @submit=${onLogin} id="login-page" class="auth">
            <form id="login">
                <h1 class="title">Login</h1>

                <article class="input-group">
                    <label for="login-email">Email: </label>
                    <input type="email" id="login-email" name="email">
                </article>

                <article class="input-group">
                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password">
                </article>

                <input type="submit" class="btn submit-btn" value="Log In">
            </form>
        </section>`

export function showLogin(ctx) {
    ctx.render(loginTemplate(submitHandler(onLogin)));

    async function onLogin({ email, password }) {
        email = email.trim();
        password = password.trim();
        if (email == '' || password == '') {
            return alert('All fields are required!');
        }
        await login(email, password);
        ctx.page.redirect('/');
    }
}
