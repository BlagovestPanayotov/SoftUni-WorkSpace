const host = 'http://localhost:3030';


async function request(method, url, body) {

    const options = {
        method,
        headers: {}
    }

    if (body != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
        options.headers['X-Authorization'] = user.accessToken;
    }

    try {
        const response = await fetch(host + url, options);
        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }
        if (response.status === 204) {
            return response;
        }
        return response.json()
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

const get = request.bind(null, 'get');
const post = request.bind(null, 'post');
const put = request.bind(null, 'put');
const del = request.bind(null, 'delete');

export {
    get,
    post,
    put,
    del as delete
}