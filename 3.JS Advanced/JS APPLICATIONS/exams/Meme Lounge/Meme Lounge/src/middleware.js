import { logout } from "./api/auth.js";
import { html, nothing, render } from "./lib.js"
import { getUserData } from "./util.js";

const main = document.querySelector('main');
const nav = document.querySelector('nav');
const notification = document.querySelector('#notifications');

const navTemplate = (user) => html`
             ${user
        ? nothing
        : html`<a class="active" href="/">Home Page</a>`}
             <a href="/catalog">All Memes</a>
             ${user
        ? html`<div class="user">
                        <a href="/create">Create Meme</a>
                        <div class="profile">
                            <span>Welcome, ${user.email}</span>
                            <a href="/profile">My Profile</a>
                            <a href="/logout">Logout</a>
                        </div>
                    </div>`
        : html`<div class="guest">
                        <div class="profile">
                            <a href="/login">Login</a>
                            <a href="/register">Register</a>
                        </div>
                    </div>`}
            `


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
    redirect('/');
}

export function alertMessage(message) {

    const notificationTemplate = (message) => html`
               <div id="errorBox" class="notification">
               <span>${message}</span>
           </div>`;
    render(notificationTemplate(message), notification)

    setTimeout(function(){render(nothing, notification)}, 3000);
}
