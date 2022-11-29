import { html, nothing, render } from "./lib.js";

const header = document.querySelector('header');
const main = document.querySelector('main');

export function updateNav(ctx, next) {
    const user = sessionStorage.getItem('user')
    const navTemplate = (user) => html`
        <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

        <nav>
            <div>
                <a href="/catalog">Dashboard</a>
                <a href="/search">Search</a>
            </div>

           ${user ? html`<div class="user">
                <a href="/create">Add Pair</a>
                <a href="/logout">Logout</a>
            </div>`
            : nothing}

            ${user ? nothing
            : html`<div class="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>`
        }
        </nav>
        `

    render(navTemplate(user), header);

    next();
}

export function updateContext(ctx, next) {
    ctx.render = function(content) {
        render(content, main);
    };
    next();
}

