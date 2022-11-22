const url = 'http://localhost:3030/jsonstore/advanced/dropdown'

async function request(method, url, body) {
    const options = {
        method,
        headers: {}
    }

    if (method === 'post') {
        options.headers['Content-Type'] = 'application/json';
    }
    try {
        if (body !== undefined) {
            options.body = JSON.stringify(body)
        }
        const response = await fetch(url, options);
        if (!response.ok) {
            const error = await request.JSON
            throw new Error(error.message);
        }
        return response.json()
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

const get = request.bind(null, 'get', url);
const post = request.bind(null, 'post', url);

export {
    get,
    post
}