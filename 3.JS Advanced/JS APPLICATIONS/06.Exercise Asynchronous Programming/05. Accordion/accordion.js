async function solution() {

    const titles = await getTitles();
    createTitles(titles);
}

async function getTitles() {
    const url = 'http://localhost:3030/jsonstore/advanced/articles/list';

    const response = await fetch(url);
    const data = await response.json();

    return data
}

function createTitles(data) {
    const main = document.getElementById('main');
    for (const el of data) {
        const title = main.appendChild(elementBuilder('div', { class: 'accordion' },
            elementBuilder('div', { class: 'head' },
                elementBuilder('span', {}, el.title),
                elementBuilder('button', { class: 'button', id: el._id, onClick: (event) => toggleInfo(event, el._id) }, 'More'))));
        main.appendChild(title);
    }
}

async function toggleInfo(event, id) {
    const info = event.target.parentElement.parentElement.children[1];
    
    if (event.target.textContent === 'More') {
        if (info) {
            info.style.display = 'block';
        } else {
            event.target.textContent = 'Loading...'
            event.target.disabled = true;

            const data = await getTitleContent(id)

            const info = elementBuilder('div', { class: 'extra' },
                elementBuilder('p', {}, data.content));

            info.style.display = 'block';

            event.target.parentElement.parentElement.appendChild(info);
        }

        event.target.textContent = 'Less';
        event.target.disabled = false;

    } else {
        info.style.display = 'none';
        info.remove(); // not needed line. The application will work better without it
        event.target.textContent = 'More';
    }


}

async function getTitleContent(id) {
    const url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

function elementBuilder(type, attributes, ...content) {
    const newElement = document.createElement(type);
    for (const attribute in attributes) {
        if (attribute.substring(0, 2) === 'on') {
            newElement.addEventListener(attribute.substring(2).toLowerCase(), attributes[attribute]);
        } else {
            newElement.setAttribute(attribute, attributes[attribute]);
        }
    }

    for (const el of content) {
        if (typeof el === 'string' || typeof el === 'number') {
            const textNode = document.createTextNode(el);
            newElement.appendChild(textNode);
        } else {
            newElement.appendChild(el);
        }
    }

    return newElement;
}

solution();