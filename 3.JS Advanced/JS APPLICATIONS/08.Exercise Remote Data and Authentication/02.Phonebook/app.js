function attachEvents() {

    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');

    const phoneBook = document.getElementById('phonebook');

    loadBtn.addEventListener('click', async () => onLoadClick(event, phoneBook));

    createBtn.addEventListener('click', async () => onCreateClick(event, phoneBook));

}

async function onCreateClick(event, phoneBook) {

    const person = document.getElementById('person');
    const phone = document.getElementById('phone');

    if (person.value === ''
        || phone.value === '') {
        alert('You can\'t have a contact without name or phone number!');
        return;
    }

    const requestBody = {
        "person": person.value,
        "phone": phone.value
    }

    event.target.textContent = 'Creating contact...';
    event.target.disabled = true;


    elementBuilder(phoneBook, 'li', await postContact(requestBody))

    person.value = '';
    phone.value = '';

    event.target.textContent = 'Create';
    event.target.disabled = false;

}

async function postContact(body) {

    const url = 'http://localhost:3030/jsonstore/phonebook';
    try {
        const res = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (res.status !== 200) {
            throw new Error('Invalid Request');
        }

        const data = await res.json();

        return data;

    } catch (error) {
        alert(error.message);
    }

}

async function onLoadClick(event, phoneBook) {

    phoneBook.textContent = 'Loading...';
    event.target.disabled = true;
    const data = await getData();
    phoneBook.textContent = '';
    data.forEach(x => {
        elementBuilder(phoneBook, 'li', x);
    })

    event.target.disabled = false;

}

async function getData() {
    const url = 'http://localhost:3030/jsonstore/phonebook';
    const res = await fetch(url);
    const data = await res.json();

    return Object.values(data);
}

function elementBuilder(parent, type, content) {
    const newElement = document.createElement(type);
    parent.appendChild(newElement);
    newElement.setAttribute('_id', content['_id']);
    newElement.textContent = `${content.person}: ${content.phone}`;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click',() => deleteData(event, newElement, content['_id']));

    newElement.appendChild(delBtn);
}

async function deleteData(event, newElement, id) {
    const url = 'http://localhost:3030/jsonstore/phonebook/' + id;

    if (confirm('Are you sure you want to delete this contact?')) { //for passing the tests you need to remove the confirm
        event.target.textContent = 'Deleting...';
        event.target.disabled = true;

        await fetch(url, { method: 'delete' });

        newElement.remove();
    }
}

attachEvents();