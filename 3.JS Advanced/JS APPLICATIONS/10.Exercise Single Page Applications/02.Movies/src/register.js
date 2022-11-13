import { showView } from "./util.js";

const registerSection = document.getElementById('form-sign-up');
const form = registerSection.querySelector('form');

export function showRegister() {
    showView(registerSection);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // const formData = new FormData(form);

    // const email = formData.get('email');
    // const password = formData.get('password');
    // const repass = formData.get('repeatPassword');

    // try{
        
    //     throw new Error('All fields are required!');


    // }catch(err){
    //     alert(err.message)
    // }

});
