import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./api.js";

const endpoints = {
    'login': '/users/login',
    'register': '/users/register',
    'logout': '/users/logout',
}

export async function login(userAuth) {
    const data = await post(endpoints.login, userAuth);
    setUserData(data);
}

export async function register(userAuth) {
    const data = await post(endpoints.register, userAuth);
    setUserData(data);
}

export async function logout() {
    get(endpoints.logout);
    clearUserData();
}
