const host = 'http://localhost:3030/jsonstore/collections/books'

async function request(method, id, body) {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (body !== undefined) {
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(id ? host + '/' + id : host, options);
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }
        if(method==='delete'){
            return response;
        }
        return response.json();

    } catch (err) {
        alert(err.message);
        throw err;
    }

}

const getAllBooks = request.bind(null, 'get');
const createBook = request.bind(null, 'post');
const getBook = request.bind(null, 'get');
const updateBook = request.bind(null, 'put');
const delBook = request.bind(null, 'delete');

export {
    getAllBooks,
    createBook,
    getBook,
    updateBook,
    delBook
}