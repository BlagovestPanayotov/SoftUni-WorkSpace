import { logout } from "./api/auth.js";
import { html, nothing, render } from "./lib.js"
import { getUserData } from "./util.js";

const main = document.querySelector('main');
const nav = document.querySelector('header');
const notification = document.querySelector('#notifications');

const navTemplate = (user) =>  html`
            <nav>
                <a href="/catalog">Theater</a>
                <ul>
                    ${user
                        ? html`
                            <li><a href="/profile">Profile</a></li>
                            <li><a href="/create">Create Event</a></li>
                            <li><a href="/logout">Logout</a></li>`
                        : html`
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register">Register</a></li>`}
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
    render(navTemplate(user), nav);
    next();
}

export async function onLogout(ctx) {
    await logout();
    ctx.page.redirect('/catalog');
}

export function alertMessage(message) {

    const notificationTemplate = (message) => html`
               <div id="errorBox" class="notification">
               <span>${message}</span>
           </div>`;
    render(notificationTemplate(message), notification)

    setTimeout(function(){render(nothing, notification)}, 3000);
}
