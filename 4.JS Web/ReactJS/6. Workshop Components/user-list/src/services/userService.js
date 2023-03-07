const urlBase = 'http://localhost:3005/api/users/';

async function getAll() {
    const response = await fetch(urlBase);

    return response.json();
}

async function create(data) {
    const response = await fetch(urlBase, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}


async function getById(id) {

    const response = await fetch(urlBase + id, {
        method: 'GET'
    });


    return response.json();

}

async function editById(id, data) {
    const response = await fetch(urlBase + `/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return response.json();
}

async function deleteById(id) {
    const response = await fetch(urlBase + `/${id}`, {
        method: 'DELETE'
    });

    return response;

}

export {
    getAll,
    create,
    getById,
    editById,
    deleteById
};