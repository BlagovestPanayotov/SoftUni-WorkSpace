import { login } from "../api/auth.js";
import { html } from "../library.js";
import { submitHandler } from "../util.js";


const loginTemplate = (onLogin) => html`
        <section @submit=${onLogin} id="login">
          <div class="form">
            <h2>Login</h2>
            <form class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>`

export function showLogin(ctx) {
    ctx.render(loginTemplate(submitHandler(onLogin)));

    async function onLogin({ email, password }) {

        if (email.trim() == '' || password.trim() == '') return alert('All fields are required!');

        await login(email.trim(), password.trim());
        ctx.page.redirect('/catalog');
    }
}