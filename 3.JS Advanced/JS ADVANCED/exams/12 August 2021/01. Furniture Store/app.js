window.addEventListener('load', solve);

function solve() {
    const input = {
        model: document.getElementById('model'),
        year: document.getElementById('year'),
        description: document.getElementById('description'),
        price: document.getElementById('price'),
    };

    let totalPrice = 0;

    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', addFurniture);

    const furnitureList = document.getElementById('furniture-list');

    const totalPriceRow = document.querySelector('.total-price');

    function addFurniture(event) {
        event.preventDefault();

        const model = input.model.value;
        const year = input.year.value;
        const description = input.description.value;
        const price = input.price.value;

        if (model !== '' && year !== ''
            && description !== '' && price !== ''
            && Number(year) >= 0 && Number(price >= 0)) {

            const newInfoElement = elementBuilder(furnitureList, 'tr', undefined, 'info');
            elementBuilder(newInfoElement, 'td', model);
            elementBuilder(newInfoElement, 'td', Number(price).toFixed(2));
            const buttonContainer = elementBuilder(newInfoElement, 'td');
            elementBuilder(buttonContainer, 'button', 'More Info', 'moreBtn', showInfo);
            elementBuilder(buttonContainer, 'button', 'Buy it', 'buyBtn', buyFurniture);

            const newHideElement = elementBuilder(furnitureList, 'tr', undefined, 'hide');
            elementBuilder(newHideElement, 'td', `Year: ${year}`);
            const tdDescription = elementBuilder(newHideElement, 'td', `Description: ${description}`);
            tdDescription.setAttribute('colspan', '3');
            let isHidden = true;


            function showInfo(event) {
                if (!isHidden) {
                    newHideElement.style.display = 'none';
                    event.target.textContent = 'More Info';
                } else {
                    newHideElement.style.display = 'contents';
                    event.target.textContent = 'Less Info';
                }
                isHidden = !isHidden;
            }
            function buyFurniture() {
                totalPrice += Number(price);
                newInfoElement.remove();
                newHideElement.remove();
                totalPriceRow.textContent = totalPrice.toFixed(2);
            }

            input.model.value = '';``
            input.year.value = '';
            input.description.value = '';
            input.price.value = '';

        }


    }

    function elementBuilder(parent, tagName, content, className, eventListener) {
        const newElement = document.createElement(tagName);
        parent.appendChild(newElement);
        if (content) { newElement.textContent = content; }
        if (className) { newElement.className = className; }
        if (eventListener) { newElement.addEventListener('click', eventListener) }

        return newElement;
    }
}
