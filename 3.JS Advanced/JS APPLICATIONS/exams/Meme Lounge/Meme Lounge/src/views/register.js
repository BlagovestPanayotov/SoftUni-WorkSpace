import { register } from "../api/auth.js";
import { html } from "../lib.js";
import { alertMessage } from "../middleware.js";
import { submitHandler } from "../util.js";



const registerTemplate = (onRegister) => html`
        <section id="register">
            <form @submit=${onRegister} id="register-form">
                <div class="container">
                    <h1>Register</h1>
                    <label for="username">Username</label>
                    <input id="username" type="text" placeholder="Enter Username" name="username">
                    <label for="email">Email</label>
                    <input id="email" type="text" placeholder="Enter Email" name="email">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password">
                    <label for="repeatPass">Repeat Password</label>
                    <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
                    <div class="gender">
                        <input type="radio" name="gender" id="female" value="female">
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="male" value="male" checked>
                        <label for="male">Male</label>
                    </div>
                    <input type="submit" class="registerbtn button" value="Register">
                    <div class="container signin">
                        <p>Already have an account?<a href="/login">Sign in</a>.</p>
                    </div>
                </div>
            </form>
        </section>
`

export function showRegister(ctx) {
    ctx.render(registerTemplate(submitHandler(onRegister)));

    async function onRegister(data) {

        data.email = data.email.trim();
        data.username = data.username.trim();
        data.password = data.password.trim();
        data.repeatPass = data.repeatPass.trim();
        try {
            if (data.email == '' || data.password == '' || data.repeatPass == '' || data.username == '') {
                throw new Error('All fields are required!');
            }

            if (data.password !== data.repeatPass) {
                throw new Error('Passwords don\'t match!');
            }

            await register(data.username, data.email, data.password, data.gender);
            ctx.page.redirect('/catalog');
        } catch (err) {
            alertMessage(err.message)
        }
    }
}