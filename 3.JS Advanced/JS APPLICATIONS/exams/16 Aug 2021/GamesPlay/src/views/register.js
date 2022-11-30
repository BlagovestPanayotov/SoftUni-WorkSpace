import { register } from "../api/auth.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";



const registerTemplate = (onRegister) => html`
        <section @submit=${onRegister} id="register-page" class="content auth">
            <form id="register">
                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Register</h1>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com">

                    <label for="pass">Password:</label>
                    <input type="password" name="password" id="register-password">

                    <label for="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password">

                    <input class="btn submit" type="submit" value="Register">

                    <p class="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </div>
            </form>
        </section>

`

export function showRegister(ctx) {
    ctx.render(registerTemplate(submitHandler(onRegister)));

    async function onRegister(data) {

        data.email = data.email.trim();
        data.password = data.password.trim();
        data['confirm-password'] = data['confirm-password'].trim();

        if (data.email == '' || data.password == '' || data['confirm-password'] == '') {
            return alert('All fields are required!');
        }
        await register(data.email, data.password);
        ctx.page.redirect('/');
    }
}