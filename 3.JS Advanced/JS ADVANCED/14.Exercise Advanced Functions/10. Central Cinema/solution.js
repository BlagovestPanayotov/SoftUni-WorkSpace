function solve() {

    const [name, hall, price, button] = Array.from(document.getElementById('container').children);
    const listMovies = document.querySelector('#movies > ul');
    const listArchive = document.querySelector('#archive > ul');
    const clearButton = document.querySelector('#archive button');

    clearButton.addEventListener('click', clearList);

    button.addEventListener('click', moveOnScreen);

    function moveOnScreen(ev) {
        ev.preventDefault();
        if (name.value &&
            hall.value &&
            Number(price.value)) {
            createMovieOnScreen();
        }
        name.value = null;
        hall.value = null;
        price.value = null;
    }
    function createMovieOnScreen() {
        const liElement = createElement('li');
        liElement.appendChild(createElement('span', name.value));
        const strongElementInLi = createElement('strong', `Hall: ${hall.value}`);
        liElement.appendChild(strongElementInLi);

        const div = createElement('div');
        const priceElement = createElement('strong', Number(price.value).toFixed(2));
        div.appendChild(priceElement);
        const inputQuantity = createElement('input', null, 'Tickets Sold');
        div.appendChild(inputQuantity);
        div.appendChild(createElement('button', 'Archive', null, ['click', addToArchive]));

        liElement.appendChild(div)
        listMovies.appendChild(liElement);

        function addToArchive() { //there is a problem to fix in this function
            const currentQuantity = Number(inputQuantity.value);
            if (currentQuantity || inputQuantity.value === '0') {

                listArchive.appendChild(liElement);
                strongElementInLi.textContent =
                    `Total amount: ${(Number(priceElement.textContent) * currentQuantity).toFixed(2)}`;
                div.remove();
                liElement.appendChild(createElement('button', 'Delete', null, ['click', removeLi]));
            }
        }
        function removeLi(ev) {
            ev.target.parentElement.remove();
        }

    }

    function createElement(type, textContent, placeholder, eventListener) {
        const element = document.createElement(type);
        if (textContent) {
            element.textContent = textContent;
        }
        if (placeholder) {
            element['placeholder'] = placeholder;
        }
        if (eventListener) {
            element.addEventListener(eventListener[0], eventListener[1]);
        }
        return element;
    }

    function clearList() {
        Array.from(document.querySelectorAll('#archive ul li')).map(x => x.remove());
    }
}
