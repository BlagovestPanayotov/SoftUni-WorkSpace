import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./api.js"

const endpoints = {
    'login': '/users/login',
    'register': '/users/register',
    'logout': '/users/logout'
}

export async function login(email, password) {
    const userData = await post(endpoints.login, { email, password });
    setUserData(userData);
}

export async function register(email, password, rePassword) {
    const userData = await post(endpoints.register, { email, password, rePassword });
    setUserData(userData);
}

export function logout() {
    get(endpoints.logout);
    clearUserData()
}