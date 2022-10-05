function validate() {
    const userNamePattern = /^([a-zA-Z0-9]){3,20}$/;
    const passwordPattern = /^([\w]){5,15}$/;
    const emailPattern = /@(\w)*\./;

    const companyDiv = document.getElementById('companyInfo');
    const checkbox = document.getElementById('company');
    const submitButton = document.getElementById('submit');
    const form = document.getElementById('registerForm');

    const userName = form.querySelector('#username');
    const email = form.querySelector('#email');
    const password = form.querySelector('#password');
    const confirmPassword = form.querySelector('#confirm-password');
    const companyNumber = form.querySelector('#companyNumber');

    const validDiv = document.getElementById('valid');


    submitButton.addEventListener('click', validateSubmitForm);
    checkbox.addEventListener('change', showHideCompanyInput);

    function validateSubmitForm(ev) {
        ev.preventDefault();


        let isValid = true;

        if (!userName.value.match(userNamePattern)) {
            isValid = false;
            userName.style['border-color'] = 'red';
        } else {
            userName.style.border = 'none';
        }
        if (!email.value.match(emailPattern)) {
            isValid = false;
            email.style['border-color'] = 'red';
        } else {
            email.style['border'] = 'none';
        }
        if (password.value !== confirmPassword.value) {
            isValid = false;
            password.style['border-color'] = 'red';
            confirmPassword.style['border-color'] = 'red';
        } else {
            if (!password.value.match(passwordPattern)) {
                isValid = false;
                password.style['border-color'] = 'red';
            } else {
                password.style['border'] = 'none';
            }
            if (!confirmPassword.value.match(passwordPattern)) {
                isValid = false;
                confirmPassword.style['border-color'] = 'red';
            } else {
                confirmPassword.style['border'] = 'none';
            }
        }
        if (checkbox.checked) {
            if (Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999) {
                isValid = false;
                companyNumber.style['border-color'] = 'red';
            } else {
                companyNumber.style['border'] = 'none';
            }
        }


        if (isValid) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }

    }

    function showHideCompanyInput(ev) {
        if (ev.target.checked) {
            companyDiv.style.display = 'block';
        } else {
            companyDiv.style.display = 'none';
        }
    }
}

