import { logout } from "./api/auth.js";
import { html, nothing, render } from "./lib.js"
import { getUserData } from "./util.js";

const main = document.querySelector('main');
const nav = document.querySelector('header');

const navTemplate = (user) => html`
            <nav>
                <img src="/images/headphones.png">
                <a href="/">Home</a>
                <ul>
                    <li><a href="/catalog">Catalog</a></li>
                    <li><a href="/search">Search</a></li>
                    ${user
                        ?html `<li><a href="/create">Create Album</a></li>
                                <li><a href="/logout">Logout</a></li>`
                        :html `<li><a href="/login">Login</a></li>
                                <li><a href="/register">Register</a></li>`}
                </ul>
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
