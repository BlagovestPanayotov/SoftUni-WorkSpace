function solve() {

    const input = {
        recipientName: document.getElementById('recipientName'),
        title: document.getElementById('title'),
        message: document.getElementById('message'),
    }

    const [listMailSection, sentMailSection, trashSection] = Array.from(document.querySelectorAll('.sent-list,ul'));

    const addBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');


    addBtn.addEventListener('click', moveToListOfMails);
    resetBtn.addEventListener('click', clearInput);

    function moveToListOfMails(event) {
        event.preventDefault();
        const recipientName = input.recipientName.value;
        const title = input.title.value;
        const message = input.message.value;

        if (recipientName !== '' && title !== '' && message !== '') {
            const newMailLiElement = elementBuilder(listMailSection, 'li');
            elementBuilder(newMailLiElement, 'h4', `Title: ${title}`);
            elementBuilder(newMailLiElement, 'h4', `Recipient Name: ${recipientName}`);
            elementBuilder(newMailLiElement, 'span', `${message}`);
            const buttonsContainer = elementBuilder(newMailLiElement, 'div', undefined, undefined, undefined, 'list-action');
            const sendBtn = elementBuilder(buttonsContainer, 'button', 'Send', 'submit', undefined, 'send');
            const deleteBtn = elementBuilder(buttonsContainer, 'button', 'Delete', 'submit', undefined, 'delete');

            sendBtn.addEventListener('click', moveToSentMailSection);
            deleteBtn.addEventListener('click', moveToTrashSection);

            clearInput(event);

            function moveToSentMailSection(event) {
                event.preventDefault();
                const newSentMailLiElement = elementBuilder(sentMailSection, 'li');
                elementBuilder(newSentMailLiElement, 'span', `To: ${recipientName}`);
                elementBuilder(newSentMailLiElement, 'span', `Title: ${title}`);
                const moveToSentMailSectionButtonContainer = elementBuilder(newSentMailLiElement, 'div', undefined, undefined, 'btn');
                const moveToSentMailSectionButton = elementBuilder(moveToSentMailSectionButtonContainer, 'button', 'Delete', 'submit', 'delete');

                moveToSentMailSectionButton.addEventListener('click', moveToTrashSection);

                newMailLiElement.remove();
            }

            function moveToTrashSection(event) {
                event.preventDefault();

                const newLiTrashSectionElement = elementBuilder(trashSection, 'li');
                elementBuilder(newLiTrashSectionElement, 'span', `To: ${recipientName}`);
                elementBuilder(newLiTrashSectionElement, 'span', `Title: ${title}`);

                this.parentElement.parentElement.remove();
            }

        }
    }

    function elementBuilder(parent, tagName, text, type, className, idName) {
        const newElement = document.createElement(tagName);
        parent.appendChild(newElement);
        if (text) { newElement.textContent = text; }
        if (type) { newElement.setAttribute('type', type); }
        if (className) { newElement.className = className; }
        if (idName) { newElement.setAttribute('id', idName); }

        return newElement;
    }
    function clearInput(event) {
        event.preventDefault();
        input.recipientName.value = '';
        input.title.value = '';
        input.message.value = '';
    }

}

solve();