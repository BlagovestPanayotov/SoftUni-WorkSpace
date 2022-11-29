import { del, get, post, put } from "./api.js"


const endpoints = {
    'getAll': '/data/shoes?sortBy=_createdOn%20desc',
    'getById': '/data/shoes/',
    'deleteById': '/data/shoes/',
    'editById':'/data/shoes/',
    'addElement':'/data/shoes',
    'searchForElement': (query)=>`/data/shoes?where=brand%20LIKE%20%22${query}%22`
}

export async function getAll() {
    return get(endpoints.getAll);
}

export async function getById(id) {
    return get(endpoints.getById + id);
}

export async function deleteById(id) {
    return del(endpoints.deleteById + id);
}

export async function editById(id,data) {
    return put(endpoints.editById+id,data);
}

export async function addElement(data){
    return post(endpoints.addElement,data);
}

export async function searchForElements(query){
    return get(endpoints.searchForElement(query));
}