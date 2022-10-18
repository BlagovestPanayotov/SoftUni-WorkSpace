window.addEventListener('load', solve);

function solve() {
    const input = {
        typeProduct: document.getElementById('type-product'),
        description: document.getElementById('description'),
        clientName: document.getElementById('client-name'),
        clientPhone: document.getElementById('client-phone'),
    };

    const sendBtn = document.querySelector('#right button');
    sendBtn.addEventListener('click', sendForm);

    const receivedOrdersSection = document.getElementById('received-orders');
    const completedOrdersSection = document.getElementById('completed-orders');

    completedOrdersSection.querySelector('.clear-btn').addEventListener('click', clearOrders);

    function sendForm(event) {
        event.preventDefault();

        const typeProduct = input.typeProduct.value;
        const description = input.description.value;
        const clientName = input.clientName.value;
        const clientPhone = input.clientPhone.value;

        if (description !== '' && clientName !== '' && clientPhone !== '') {

            const newOrder = elementBuilder(receivedOrdersSection, 'div', undefined, 'container');

            elementBuilder(newOrder, 'h2', `Product type for repair: ${typeProduct}`);
            elementBuilder(newOrder, 'h3', `Client information: ${clientName}, ${clientPhone}`);
            elementBuilder(newOrder, 'h4', `Description of the problem: ${description}`);
            const startBtn = elementBuilder(newOrder, 'button', 'Start repair', 'start-btn');
            const finishBtn = elementBuilder(newOrder, 'button', 'Finish repair', 'finish-btn');

            finishBtn.disabled = true;
            startBtn.addEventListener('click', startRepair);
            finishBtn.addEventListener('click', completeRepair);

            function startRepair() {
                finishBtn.disabled = false;
                startBtn.disabled = true;
            }

            function completeRepair() {
                completedOrdersSection.appendChild(newOrder);
                startBtn.remove();
                finishBtn.remove();
            }

            input.typeProduct.value = '';
            input.description.value = '';
            input.clientName.value = '';
            input.clientPhone.value = '';
        }

    }

    function clearOrders() {
        const divElements = Array.from(completedOrdersSection.querySelectorAll('div'));
        for (const el of divElements) {
            el.remove();
        }
    }



    function elementBuilder(parent, tagName, content, className) {
        const newElement = document.createElement(tagName);
        if (parent) { parent.appendChild(newElement); }
        if (content) { newElement.textContent = content; }
        if (className) { newElement.className = className };

        return newElement;
    }

}