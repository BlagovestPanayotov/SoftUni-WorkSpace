function attachEventsListeners() {

    const divCollection = document.querySelectorAll('div');
    const conver = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    };

    for (let el of divCollection) {

        let button = el.querySelector("input[type='button']");
        button.addEventListener('click', converting);

    }

    function converting(ev) {

        const currentValueElement = ev
            .target
            .parentElement
            .querySelector('input[type="text"]');

        const currentValueConvertToDays = Number(currentValueElement.value) / conver[currentValueElement.id];

        for (let div of divCollection) {
            const currentElement = div.querySelector('input[type="text"]');
            currentElement.value = currentValueConvertToDays * conver[currentElement.id];
        }

    }

}