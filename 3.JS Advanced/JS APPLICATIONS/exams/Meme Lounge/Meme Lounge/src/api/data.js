import { del, get, post, put } from "./api.js";


const endpoints = {
    'getAll': '/data/memes?sortBy=_createdOn%20desc',
    'getById': '/data/memes/',
    'deleteItem': '/data/memes/',
    'editItem': '/data/memes/',
    'createItem': '/data/memes',
    'getMyItems': (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    // 'canLike': (itemId, userId) => `/data/likes?where=bookId%3D%22${itemId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    // 'like': '/data/likes',
    // 'getLikes': (itemId) => `/data/likes?where=bookId%3D%22${itemId}%22&distinct=_ownerId&count`,
    // 'getResentGames': '/data/games?sortBy=_createdOn%20desc&distinct=category&offset=0&pageSize=3',
    // 'getComments': (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
    // 'postComment':'/data/comments',
    // 'addNewPost': '/data/posts',
}

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

// export function getResentGames() {
//     return get(endpoints.getResentGames);
// }

// export function getComments(gameId){
//     return get(endpoints.getComments(gameId));
// }

// export function postComment(data){
//     return post(endpoints.postComment,data);
// }

// export function addNewPost(body) {
//     return post(endpoints.addNewPost, body);
// }


// export function like(data) {
//     return post(endpoints.like, data);
// }

// export function getLikes(itemId) {
//     return get(endpoints.getLikes(itemId));
// }

// export function canLike(itemId, userId){
//     return get(endpoints.canLike(itemId, userId))
// }

