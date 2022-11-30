import { login } from "../api/auth.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";


const loginTemplate = (onLogin) =>html`
        <section @submit=${onLogin} id="login-page" class="auth">
            <form id="login">

                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Login</h1>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

                    <label for="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password">
                    <input type="submit" class="btn submit" value="Login">
                    <p class="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </div>
            </form>
        </section>
`   

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
