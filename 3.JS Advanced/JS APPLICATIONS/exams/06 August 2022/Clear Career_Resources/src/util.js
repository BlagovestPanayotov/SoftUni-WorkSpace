import { logout } from "./api/auth.js";

export function submitHandler(callback){
    return function(event){
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(event.target));

        callback(formData,event.target);
    }
}

export function setUserData(data){
    sessionStorage.setItem('user',JSON.stringify(data));
}

export function getUserData(data){
    return JSON.parse(sessionStorage.getItem('user'));
}

export function clearUserData(data){
    sessionStorage.removeItem('user');
}

export function onLogout(ctx){
    logout();
    ctx.page.redirect('/catalog');
}

