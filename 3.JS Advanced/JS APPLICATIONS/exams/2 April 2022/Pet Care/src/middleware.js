import { logout } from "./api/auth.js";
import { html, render } from "./lib.js"
import { getUserData } from "./util.js";

const main = document.querySelector('main');
const header = document.querySelector('header');

const navTemplate = (user) => html`
            <nav>
            <section class="logo">
                <img src="./images/logo.png" alt="logo">
            </section>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/catalog">Dashboard</a></li>
            ${user
            ? html`
                <li><a href="/create">Create Postcard</a></li>
                <li><a href="/logout">Logout</a></li>
                `
            : html`
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
                `}
            </ul>
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
    ctx.page.redirect('/')
}