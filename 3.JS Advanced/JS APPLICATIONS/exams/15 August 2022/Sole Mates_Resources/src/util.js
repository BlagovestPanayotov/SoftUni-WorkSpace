export function getUserData() {
    return JSON.parse(sessionStorage.getItem('user'));
}

export function setUserData(data) {
    sessionStorage.setItem('user', JSON.stringify(data));
}

export function clearUserData() {
    sessionStorage.removeItem('user');
}

export function submitHandler(callback){
    return function(event){
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(event.target));

        callback(formData,event.target);
    }
}
