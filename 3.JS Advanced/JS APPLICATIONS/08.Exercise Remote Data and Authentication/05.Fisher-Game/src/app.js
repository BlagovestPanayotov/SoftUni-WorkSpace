let userData = null;

window.addEventListener('load', () => {
    userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData === null) {
        document.getElementById('user').style.display = 'none';
        document.querySelector('.email span').textContent = 'guest';
        document.getElementById('guest').style.display = 'inline-block';
        document.querySelector('#addForm .add').disabled = true;

    } else {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#addForm .add').disabled = false;
        document.querySelector('.email span').textContent = userData.email;
    }

    document.querySelector('.load').addEventListener('click', loadAllCatches);

    document.getElementById('addForm').addEventListener('submit', onCreate);

    document.getElementById('catches').addEventListener('click', catchManipulator);

    document.getElementById('logout').addEventListener('click', onLogout);

});

async function onLogout() {
    console.log('lalal');
    try {
        const response = await fetch('http://localhost:3030/users/logout', {
            headers: {
                'X-Authorization': userData.token
            }
        });

        if (response.status !== 204) {
            throw new Error('Unsuccessful logout');
        }
        sessionStorage.clear();
        window.location='login.html'
    } catch (err) {
        alert(err.message);
    }
}

function catchManipulator(event) {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    const text = event.target.className;
    if (text === 'update') {
        onUpdate(event.target);
    } else if (text === 'delete') {
        onDelete(event.target);
    }
}

async function onUpdate(button) {
    const id = button.dataset.id;
    const divElement = button.parentElement;
    const body = {
        angler: divElement.querySelector('.angler').value,
        weight: divElement.querySelector('.weight').value,
        species: divElement.querySelector('.species').value,
        location: divElement.querySelector('.location').value,
        bait: divElement.querySelector('.bait').value,
        captureTime: divElement.querySelector('.captureTime').value
    }

    try {
        if (Object.values(body).some(x => x === '')) {
            throw new Error('All fields are required!');
        }
        const response = await fetch('http://localhost:3030/data/catches/' + id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify(body)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(response.message);
        }

    } catch (err) {
        alert(err.message);
    }
}

async function onDelete(button) {
    const id = button.dataset.id;

    try {
        const response = await fetch('http://localhost:3030/data/catches/' + id, {
            method: 'delete',
            headers: {
                'X-Authorization': userData.token
            }
        });

        const result = await response.json();
        if (!response.ok) {
            throw new Error(result.message)
        }
        console.log(button.parentElement.remove());
    } catch (err) {
        alert(err.message);
    }
}


async function onCreate(event) {
    event.preventDefault();
    if (!userData) {
        window.loadAllCatches = 'login.html';
        return;
    }
    try {
        const formData = new FormData(event.target);
        const body = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});
        // const body = Object.fromEntries([...formData.entries()]);
        if (Object.values(body).some(x => x === '')) {
            throw new Error('All fields are required!');
        }

        const response = await fetch('http://localhost:3030/data/catches', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify(body)
        });

        const result = await response.json();

        loadAllCatches();
        event.target.reset();

    } catch (err) {
        alert(err.message);
    }

}

async function loadAllCatches() {
    try {

        const response = await fetch('http://localhost:3030/data/catches');
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message)
        }

        document.getElementById('catches').replaceChildren(...data.map(createPreview));

    } catch (err) {
        alert(err.message);
    }
}

function createPreview(data) {

    const disabled = userData && userData._id === data._ownerId ? '' : 'disabled';

    const newElement = document.createElement('div');
    newElement.setAttribute('class', 'catch');
    newElement.innerHTML =
        `<label>Angler</label>
    <input type="text" class="angler" value=${data.angler} ${disabled}>
    <label>Weight</label>
    <input type="text" class="weight" value=${data.weight} ${disabled}>
    <label>Species</label>
    <input type="text" class="species" value=${data.species} ${disabled}>
    <label>Location</label>
    <input type="text" class="location" value=${data.location} ${disabled}>
    <label>Bait</label>
    <input type="text" class="bait" value=${data.bait} ${disabled}>
    <label>Capture Time</label>
    <input type="number" class="captureTime" value=${data.captureTime} ${disabled}>
    <button class="update" data-id=${data._id} ${disabled}>Update</button>
    <button class="delete" data-id=${data._id} ${disabled}>Delete</button>`;


    return newElement;
}