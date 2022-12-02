import { login } from "../api/auth.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";


const loginTemplate = (onLogin) => html`
        <section @submit=${onLogin} id="login">
            <div class="container">
                <form id="login-form" action="#" method="post">
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr>

                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text">

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn" value="Login">
                </form>
                <div class="signin">
                    <p>Dont have an account?
                        <a href="/register">Sign up</a>.
                    </p>
                </div>
            </div>
        </section>
`

export function showLogin(ctx) {
    ctx.render(loginTemplate(submitHandler(onLogin)));

    async function onLogin({ username, password }) {
        username = username.trim();
        password = password.trim();

        if (username == '' || password == '') {
            throw new Error('All fields are required!');
        }
        await login({ username, password });
        ctx.page.redirect('/catalog');

    }
}
