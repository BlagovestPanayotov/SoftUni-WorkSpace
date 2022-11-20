const main = document.querySelector('main');
main.replaceChildren();

export function initialize(links) {
    const nav = document.querySelector('nav')
    nav.addEventListener('click', onNavigate);

    const context = {
        showSection,
        goto,
        updateNav
    }

    return context;

    function showSection(section) {
        main.replaceChildren(section);
    }

    function onNavigate(event) {
        let target = event.target;
        if (target.tagName == 'IMG') {
            target = target.parentElement
        }
        if (target.tagName === 'A') {
            event.preventDefault();
            const url = new URL(target.href);
            goto(url.pathname);
        }
    }

    function goto(name,...params) {
        const handler = links[name];
        if (typeof handler === 'function') {
            handler(context,...params);
        }
    }

    function updateNav() {
        const user = sessionStorage.getItem('user');
        if (user) {
            nav.querySelectorAll('.user').forEach(e => e.style.display = 'block');
            nav.querySelectorAll('.guest').forEach(e => e.style.display = 'none');
        } else {
            nav.querySelectorAll('.user').forEach(e => e.style.display = 'none');
            nav.querySelectorAll('.guest').forEach(e => e.style.display = 'block');
        }
    }
}
