import { register } from "../api/auth.js";
import { html } from "../lib.js";
import { submitHandler } from "../util.js";



const registerTemplate = (onRegister) => html`
        <section id="register">
            <div class="container">
                <form @submit=${onRegister} id="register-form">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr>

                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" name="username" required>

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" required>

                    <p>Repeat Password</p>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                    <hr>

                    <input type="submit" class="registerbtn" value="Register">
                </form>
                <div class="signin">
                    <p>Already have an account?
                        <a href="/login">Sign in</a>.
                    </p>
                </div>
            </div>
        </section>

`

export function showRegister(ctx) {
    ctx.render(registerTemplate(submitHandler(onRegister)));

    async function onRegister(data) {

        data.username = data.username.trim();
        data.password = data.password.trim();
        data.repeatPass = data.repeatPass.trim();

        if (data.username == '' || data.password == '' || data.repeatPass == '') {
            throw new Error('All fields are required!');
        }

        if (data.password !== data.repeatPass) {
            throw new Error('Passwords don\'t match!');
        }

        await register({ username: data.username, password: data.password });
        ctx.page.redirect('/catalog');

    }
}