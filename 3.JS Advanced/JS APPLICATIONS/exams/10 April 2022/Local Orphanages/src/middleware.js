import { logout } from "./api/auth.js";
import { html, render } from "./lib.js"
import { getUserData } from "./util.js";

const main = document.querySelector('main');
const header = document.querySelector('header');

const navTemplate = (user) => html`
            <h1><a href="/dashboard">Orphelp</a></h1>
            <nav>
                <a href="/dashboard">Dashboard</a>
                ${user
        ? html`<div id="user">
                    <a href="/myPosts">My Posts</a>
                    <a href="/create">Create Post</a>
                    <a href="/logout">Logout</a>
                </div>`
        : html`<div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`}
            </nav>
`

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