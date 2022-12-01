import { del, get, post, put } from "./api.js";


const endpoints = {
    'getAll': '/data/memes?sortBy=_createdOn%20desc',
    'getById': '/data/memes/',
    'deleteItem': '/data/memes/',
    'editItem': '/data/memes/',
    'createItem': '/data/memes',
    'getMyItems': (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
  

export function getAll() {
    return get(endpoints.getAll);
}

export function getById(itemId) {
    return get(endpoints.getById + itemId);
}

export function deleteItem(itemId) {
    return del(endpoints.deleteItem + itemId);
}

export function editItem(itemId, data) {
    return put(endpoints.editItem + itemId, data);
}

export function createItem(data) {
    return post(endpoints.createItem, data);
}

export function getMyItems(userId) {
    return get(endpoints.getMyItems(userId));
}
