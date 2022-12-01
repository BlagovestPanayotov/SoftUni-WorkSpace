import { logout } from "./api/auth.js";
import { html, render } from "./lib.js"
import { getUserData } from "./util.js";

const main = document.querySelector('main');
const header = document.querySelector('header');

const navTemplate = (user) => html`
             <nav class="navbar">
                <section class="navbar-dashboard">
                    <a href="/catalog">Dashboard</a>
                    ${user
                        ?html`<div id="user">
                            <span>Welcome, ${user.email}</span>
                            <a class="button" href="/myBooks">My Books</a>
                            <a class="button" href="/create">Add Book</a>
                            <a class="button" href="/logout">Logout</a>
                            </div>`
                        :html`<div id="guest">
                            <a class="button" href="/login">Login</a>
                            <a class="button" href="/register">Register</a>
                            </div>`}
                </section>
            </nav>`


export function contextDecorator(ctx, next) {
    ctx.render = (view) => {
        render(view, main);
    }
    next();
}

export function navUpdate(ctx, next) {
    const user = getUserData();
    render(navTemplate(user), header);
    next();
}

export async function onLogout(ctx) {
    await logout();
    ctx.page.redirect('/catalog')
}