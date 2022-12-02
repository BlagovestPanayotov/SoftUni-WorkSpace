import { register } from "../api/auth.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";



const registerTemplate = (onRegister) => html`
        <section id="registerPage">
            <form @submit=${onRegister}>
                <fieldset>
                    <legend>Register</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <label for="conf-pass" class="vhide">Confirm Password:</label>
                    <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

                    <button type="submit" class="register">Register</button>

                    <p class="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>
`

export function showRegister(ctx) {
    ctx.render(registerTemplate(submitHandler(onRegister)));

    async function onRegister(data) {

        data.email = data.email.trim();
        data.password = data.password.trim();
        data['conf-pass'] = data['conf-pass'].trim();

        if (data.email == '' || data.password == '' || data['conf-pass'] == '') {
            throw new Error('All fields are required!');
        }

        if (data.password !== data['conf-pass']) {
            throw new Error('Passwords don\'t match!');
        }

        await register(data.email, data.password);
        ctx.page.redirect('/');

    }
}