import { login } from "../api/users.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";


const loginTemplate = (onLogin) => html`
        <section id="login" @submit=${onLogin}>
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

export function showLogin(ctx, next) {
  ctx.render(loginTemplate(submitHandler(onLogin)));

  async function onLogin({ email, password },target) {
    if (email == '' || password == '') {
      alert('All fields are required!');
      return;
    }
    await login(email.trim(), password.trim());
    target.reset();
    ctx.page.redirect('/catalog');
  }
}
