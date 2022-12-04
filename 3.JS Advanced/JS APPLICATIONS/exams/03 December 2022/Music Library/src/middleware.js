import { logout } from "./api/auth.js";
import { html, nothing, render } from "./lib.js"
import { getUserData } from "./util.js";

const main = document.querySelector('main');
const nav = document.querySelector('header');

const navTemplate = (user) => html`
                <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

                <nav>
                    <div>
                        <a href="/catalog">Dashboard</a>
                    </div>

                    ${user
                        ? html`<div class="user">
                                    <a href="/create">Add Album</a>
                                    <a href="/logout">Logout</a>
                                </div>`
                        : html`<div class="guest">
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
    render(navTemplate(user), nav);
    next();
}

export async function onLogout(ctx) {
    await logout();
    ctx.page.redirect('/catalog');
}

// export function alertMessage(message) {

//     const notificationTemplate = (message) => html`
//                <div id="errorBox" class="notification">
//                <span>${message}</span>
//            </div>`;
//     render(notificationTemplate(message), notification)

//     setTimeout(function(){render(nothing, notification)}, 3000);
// }
