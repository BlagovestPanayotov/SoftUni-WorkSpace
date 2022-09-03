function focused() {

    const collection = document.querySelectorAll('div input');
    [...collection].forEach(x => {
        x.addEventListener('focus', focuse);
        x.addEventListener('blur', blurred);
    })

    function focuse(ev){
        ev.target.parentElement.className = 'focused';

    }
    function blurred(ev){
        ev.target.parentElement.classList.remove('focused');
    }

}