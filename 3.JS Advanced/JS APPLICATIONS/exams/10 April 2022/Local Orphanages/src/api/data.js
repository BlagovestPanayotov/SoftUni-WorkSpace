import { del, get, post, put } from "./api.js";


const endpoints = {
    'getAll': '/data/posts?sortBy=_createdOn%20desc',
    'getMyPosts': (userId) => `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    'addNewPost': '/data/posts',
    'createNewPost': '/data/posts',
    'getElementById': '/data/posts/',
    'editItemById': '/data/posts/',
    'deleteItemById': '/data/posts/',
    'makeDonation': '/data/donations',
    'getDonationsCount': (postId) => `/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`,
    'hasDonated': (postId, userId) => `/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export function getAll() {
    return get(endpoints.getAll);
}

export function getMyPosts(userId) {
    return get(endpoints.getMyPosts(userId));
}

export function addNewPost(body) {
    return post(endpoints.addNewPost, body);
}

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

export function makeDonation(postId) {
    return post(endpoints.makeDonation, { postId: postId });
}

export function getDonationsCount(postId) {
    return get(endpoints.getDonationsCount(postId));
}

export function hasDonated(postId, userId){
    return get(endpoints.hasDonated(postId, userId))
}