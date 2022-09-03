function attachGradientEvents() {
    const gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', percent);

    const result = document.getElementById('result');

    function percent(ev) {

        result.textContent = `${Math.floor(ev.offsetX / gradient.clientWidth * 100)}%`;

    }

}