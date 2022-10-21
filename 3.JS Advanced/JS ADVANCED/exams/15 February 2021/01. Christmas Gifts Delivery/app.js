function solution() {

    const input = document.querySelector('input');

    const addGiftBtn = document.querySelector('button');
    addGiftBtn.addEventListener('click', addGift);

    const [listOfGifts, sentGifts, discardedGifts] = Array.from(document.querySelectorAll('ul'));

    let listOfGiftElements = [];

    function addGift() {
        if (input.value == '') { return; }

        const newLiElement = elementBuilder(listOfGifts, 'li', input.value, 'gift');
        const sendButton = elementBuilder(newLiElement, 'button', 'Send', undefined, 'sendButton', sendGift);
        const discardButton = elementBuilder(newLiElement, 'button', 'Discard', undefined, 'discardButton', discardGift);

        listOfGiftElements.push(newLiElement);
        listOfGiftElements.sort((a, b) => a.textContent.localeCompare(b.textContent));
        listOfGiftElements.forEach(x => listOfGifts.appendChild(x));
        
        input.value = '';

        function sendGift() {
            sentGifts.appendChild(newLiElement);
            removeButtons();
        }
        function discardGift() {
            discardedGifts.appendChild(newLiElement);
            removeButtons();
        }
        function removeButtons() {
            sendButton.remove();
            discardButton.remove();
            listOfGiftElements = listOfGiftElements.filter(x => x !== newLiElement);
        }

    }

    function elementBuilder(parent, tagName, textContent, className, idName, eventListener) {
        const newElement = document.createElement(tagName);
        parent.appendChild(newElement);
        if (textContent) { newElement.textContent = textContent; }
        if (className) { newElement.className = className; }
        if (idName) { newElement.id = idName };
        if (eventListener) { newElement.addEventListener('click', eventListener) };

        return newElement;
    }

}