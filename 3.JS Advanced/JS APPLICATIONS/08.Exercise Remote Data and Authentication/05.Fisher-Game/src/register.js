
window.addEventListener('load', () => {
    document.getElementById('user').style.display = 'none';
    document.querySelector('form').addEventListener('submit', onRegister);

});

async function onRegister(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    // const body = [...formData.entries()].reduce((a,[k,v])=>Object.assign(a,{[k]:v}),{});
    const body = Object.fromEntries(formData.entries());

    try {
        if (Object.values(body).some(x => x === '')) {
            throw new Error('All fields are required!');
        }
        if (body.password !== body.rePass) {
            throw new Error('The password does not match!')
        }

        const response = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        const userData = {
            email : data.email,
            _id : data._id,
            token: data.accessToken
        }

        sessionStorage.setItem('userData',JSON.stringify(userData));
        window.location = 'index.html';``
        
    } catch (err) {
        alert(err.message);
    }
}


