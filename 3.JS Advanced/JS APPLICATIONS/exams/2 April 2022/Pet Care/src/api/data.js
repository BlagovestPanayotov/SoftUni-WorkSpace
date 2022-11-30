import { del, get, post, put } from "./api.js";


const endpoints = {
    'getAll': '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    'getElementById': '/data/pets/',
    'createNewPost': '/data/pets',
    'deleteItemById': '/data/pets/',
    'editItemById': '/data/pets/',
    'makeDonation': '/data/donation',
    'getDonationsCount': (petId) => `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`,
    // 'addNewPost': '/data/posts',
}

export function getAll() {
    return get(endpoints.getAll);
}

// export function getMyPosts(userId) {
//     return get(endpoints.getMyPosts(userId));
// }

// export function addNewPost(body) {
//     return post(endpoints.addNewPost, body);
// }

export function createNewPost(body) {
    return post(endpoints.createNewPost, body);
}

export function getElementById(id) {
    return get(endpoints.getElementById + id);
}

export function editItemById(id, data) {
    return put(endpoints.editItemById + id, data);
}

export function deleteItemById(id) {
    return del(endpoints.deleteItemById + id);
}

export async function makeDonation(postId) {
    return post(endpoints.makeDonation, { postId });
}

export async function getDonationsCount(postId) {
    return get(endpoints.getDonationsCount(postId));
}

export async function isDonated(petId, userId) {
    return get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}