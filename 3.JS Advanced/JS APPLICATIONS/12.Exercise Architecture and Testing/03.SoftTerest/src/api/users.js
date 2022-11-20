import { get, post } from './api.js'


const endpoints = {
    'login': '/users/login',
    'register': '/users/register',
    'logout': '/users/logout'
};


export async function login(email, password) {
    const user = await post(endpoints.login, { email, password });
    sessionStorage.setItem('user', JSON.stringify(user));
}

export async function register(email, password) {
    const user = await post(endpoints.register, { email, password });
    sessionStorage.setItem('user', JSON.stringify(user));
}

export async function logout() {
    try{
    get(endpoints.logout);      //don't await. in case of error we must remove the token from the session storage
    sessionStorage.removeItem('user');
    }catch(err){
        console.log(err.message);
    }
}