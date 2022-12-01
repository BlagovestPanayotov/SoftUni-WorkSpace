import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./api.js";

const endpoints = {
    'login': '/users/login',
    'register': '/users/register',
    'logout': '/users/logout',
}

export async function login(email, password) {
    const data = await post(endpoints.login, { email, password });
    setUserData(data);
}

export async function register(username, email, password, gender) {
    const data = await post(endpoints.register, { username, email, password, gender });
    setUserData(data);
}

export async function logout() {
    get(endpoints.logout);
    clearUserData();
}
