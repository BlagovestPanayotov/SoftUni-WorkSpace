import { register } from "../api/auth.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";



const registerTemplate = (onRegister) => html`
        <section id="register">
        <div class="form">
          <h2>Register</h2>
          <form @submit=${onRegister} class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
          </form>
        </div>
      </section>

`

export function showRegister(ctx) {
    ctx.render(registerTemplate(submitHandler(onRegister)));

    async function onRegister(data) {

        data.email = data.email.trim();
        data.password = data.password.trim();
        data['re-password'] = data['re-password'].trim();

        if (data.email == '' || data.password == '' || data['re-password'] == '') {
            throw new Error('All fields are required!');
        }

        if (data.password !== data['re-password']) {
            throw new Error('Passwords don\'t match!');
        }

        await register({ email: data.email, password: data.password });
        ctx.page.redirect('/catalog');

    }
}