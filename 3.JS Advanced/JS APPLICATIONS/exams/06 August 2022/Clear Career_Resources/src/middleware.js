import { html, render } from "./library.js"
import { getUserData } from "./util.js";

const main = document.querySelector('main');
const header = document.querySelector('header');

export function decorateContext(ctx, next) {
    ctx.render = (content) => {
        render(content, main);
    }
    next();
}

export function updateNav(ctx, next) {
    const navTemplate = (user) => html`
        <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.jpg" alt=""
        /></a>

        <nav>
          <div>
            <a href="/catalog">Dashboard</a>
          </div>
          ${user
            ? html` <div class="user">
            <a href="/create">Create Offer</a>
            <a href="/logout">Logout</a>
          </div>`
            : html`<div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>`}
        </nav>`
    const user = getUserData();
    render(navTemplate(user), header);
    next();
}