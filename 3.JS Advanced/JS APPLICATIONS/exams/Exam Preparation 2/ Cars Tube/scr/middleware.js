import { logout } from "./api/auth.js";
import { html, nothing, render } from "./lib.js"
import { getUserData } from "./util.js";

const main = document.querySelector('main');
const nav = document.querySelector('header');

const navTemplate = (user) => html`
            <nav>
                <a class="active" href="/">Home</a>
                <a href="/catalog">All Listings</a>
                <a href="/search">By Year</a>
                ${user
        ? html`<div id="profile">
                    <a>Welcome ${user.username}</a>
                    <a href="/myItems">My Listings</a>
                    <a href="/create">Create Listing</a>
                    <a href="/logout">Logout</a>
                </div>`
        : html`<div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`}
            </nav> `


export function contextDecorator(ctx, next) {
    ctx.render = (view) => {
        render(view, main);
    }
    next();
}

export function navUpdate(ctx, next) {
    const user = getUserData();
    render(navTemplate(user), nav);
    next();
}

export async function onLogout(ctx) {
    await logout();
    ctx.page.redirect('/');
}

// export function alertMessage(message) {

//     const notificationTemplate = (message) => html`
//                <div id="errorBox" class="notification">
//                <span>${message}</span>
//            </div>`;
//     render(notificationTemplate(message), notification)

//     setTimeout(function(){render(nothing, notification)}, 3000);
// }
