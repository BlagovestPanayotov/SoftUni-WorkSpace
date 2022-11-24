import { clearUserData, setUserData } from "../util.js";

const host = 'http://localhost:3030';

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };
    
    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData !== null) {
        options.headers['X-Authorization'] = userData.token;
    }

    try {
        const response = await fetch(host + url, options);

        if (response.status == 204) {
            return response;
        }

        const data = await response.json();

        if (!response.ok) {
            if(response.status == 403){
                sessionStorage.removeItem('userData');
            }
            throw new Error(data.message);
        }

        return data;


    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export const get = request.bind(null, 'get');
export const put = request.bind(null, 'put');
export const post = request.bind(null, 'post');
export const del = request.bind(null, 'delete');

export async function login(email, password) {
    const result = await post('/users/login', { email, password });

    const userData = {
        email: request.email,
        id: result._id,
        token: result.accessToken
    };
    setUserData(userData);
};

export async function register(email,password){
    const result = await post('/users/register',{email,password});

    const userData = {
        email:result.email,
        id:result._id,
        token:result.accessToken
    };
    setUserData(userData);
};

export async function logout(){
    await get('/users/logout');
    clearUserData();
}