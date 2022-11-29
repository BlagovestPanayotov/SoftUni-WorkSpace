import { register } from "../api/auth.js";
import { html } from "../library.js";
import { submitHandler } from "../util.js";



const registerTemplate = (onRegister) => html`
<section @submit=${onRegister} id="register">
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
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>`

export function showRegister(ctx) {
    ctx.render(registerTemplate(submitHandler(onRegister)));

    async function onRegister(data) {
        const email = data.email.trim();
        const password = data.password.trim();
        const repass = data['re-password'].trim();

        if (email == '' || password == '') return alert('All fields are required!');
        if (password !== repass) return alert('Passwords don\'t match!');

        await register(email, password);
        ctx.page.redirect('/catalog');

    }
}