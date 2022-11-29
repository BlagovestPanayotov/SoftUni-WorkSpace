import { html } from "../lib.js";
import { register } from "../api/users.js";
import { submitHandler } from "../util.js";


const registerTemplate = (onRegister) => html`
   <section id="register" @submit=${onRegister}>
          <div class="form">
            <h2>Register</h2>
            <form class="login-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">login</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>`

export function showRegister(ctx) {
  ctx.render(registerTemplate(submitHandler(onRegister)))

  async function onRegister(data, target) {
    if (data.email == '' || data.password == '') {
      alert('All fields are required!');
      return;
    }
    if (data.password.trim() !== data['re-password'].trim()) {
      alert('Passwords don\'t match!');
      return;
    }
    await register(data.email.trim(), data.password.trim(), data['re-password'].trim());
    ctx.page.redirect('/catalog');
  }
  console.log('Register');
}