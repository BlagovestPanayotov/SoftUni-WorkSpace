import { logout } from "./api/auth.js";
import { html, render } from "./lib.js"
import { getUserData } from "./util.js";

const main = document.querySelector('main');
const header = document.querySelector('header');

const navTemplate = (user) => html`
            <h1><a class="home" href="/">GamesPlay</a></h1>
            <nav>
                <a href="/catalog">All games</a>
                ${user
        ? html`<div id="user">
                    <a href="/create">Create Game</a>
                    <a href="/logout">Logout</a>
                </div>`
        : html`
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`}
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