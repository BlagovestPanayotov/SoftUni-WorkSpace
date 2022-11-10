window.addEventListener('load', init);

function init() {
    document.getElementById('user').style.display = 'none';
    const form = document.querySelector('form');
    form.addEventListener('submit', onLogin);
}

async function onLogin(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const email = data.get('email');
    const password = data.get('password');

    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message);
        }

        const userData = {
            email: data.email,
            _id: data._id,
            token : data.accessToken
        };

        window.sessionStorage.setItem('userData',JSON.stringify(userData));
        window.location = 'index.html'


    } catch (err) {
        alert(err.message);
    }
}
