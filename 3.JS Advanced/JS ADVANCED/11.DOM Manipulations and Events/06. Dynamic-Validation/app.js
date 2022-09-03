function validate() {
    const pattern = /[a-z]+@[a-z]+\.[a-z]{2,}/;
    const email = document.getElementById('email');

    email.addEventListener('change',change);

    function change(ev){
        if(ev.target.value.match(pattern)){
            ev.target.classList.remove('error');
        }else{
            ev.target.className = 'error';
        }
    }

}