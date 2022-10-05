function validate() {
    const input = document.getElementById('email');
    input.addEventListener('change', emailValidator);

    function emailValidator(ev) {
        const validPattern = /^[a-z]+\@[a-z]+\.[a-z]+$/;
        const text = ev.target.value
        if (!text.match(validPattern)) {
            ev.target.className = 'error';
        } else {
            ev.target.className = '';
        }
    }
}