//http://localhost:3030/jsonstore/collections/students
init();

async function init() {
    displayStudents(await getStudents());


    document.getElementById('form').addEventListener('submit', onSubmit);

}

function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    const { firstName, lastName, facultyNumber, grade } =
        Object.fromEntries(data.entries());

    if (firstName !== ''
        && lastName !== ''
        && facultyNumber !== ''
        && grade !== '') {
        postStudent({ firstName, lastName, facultyNumber, grade });
    } else {
        alert('All fields must be full')
    }


}

async function postStudent(info) {
    const url = 'http://localhost:3030/jsonstore/collections/students';
    try {
        const res = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })

        if(res.status !== 200){
            throw new Error('Invalid url')
        }

    } catch (error) {
        alert(error.message)
    }

}

async function getStudents() {
    try {
        const url = 'http://localhost:3030/jsonstore/collections/students';

        const res = await fetch(url);
        if (res.status == 200) {
            const data = await res.json();

            return Object.values(data);
        }
        throw new Error('Invalid url')
    } catch (error) {
        alert(error.message)
    }
}

function displayStudents(collection) {
    const tableBody = document.querySelector('#results tbody');
    collection.forEach(x => {
        const tRow = elementBuilder('tr', undefined,
            elementBuilder('td', x.firstName),
            elementBuilder('td', x.lastName),
            elementBuilder('td', x.facultyNumber),
            elementBuilder('td', x.grade),)
        tableBody.appendChild(tRow);
    });
}

function elementBuilder(type, text, ...children) {
    const newElement = document.createElement(type);
    if (text) { newElement.textContent = text; }
    children.forEach(x => newElement.appendChild(x));

    return newElement;
}