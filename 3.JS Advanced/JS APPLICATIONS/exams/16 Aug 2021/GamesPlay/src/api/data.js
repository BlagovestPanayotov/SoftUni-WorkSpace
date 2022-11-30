import { del, get, post, put } from "./api.js";


const endpoints = {
    'getAll': '/data/games?sortBy=_createdOn%20desc',
    'getResentGames': '/data/games?sortBy=_createdOn%20desc&distinct=category&offset=0&pageSize=3',
    'createNewGame': '/data/games',
    'editGame': '/data/games/',
    'getGame': '/data/games/',
    'deleteGame': '/data/games/',
    'getComments': (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
    'postComment':'/data/comments',
    // 'getMyPosts': (userId) => `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    // 'addNewPost': '/data/posts',
    // 'makeDonation': '/data/donations',
    // 'getDonationsCount': (postId) => `/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`,
    // 'hasDonated': (postId, userId) => `/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export function getAll() {
    return get(endpoints.getAll);
}

export function getResentGames() {
    return get(endpoints.getResentGames);
}

export function createNewGame(data) {
    return post(endpoints.createNewGame, data);
}

export function editGame(id, data) {
    return put(endpoints.editGame + id, data);
}

export function getGame(id) {
    return get(endpoints.getGame + id);
}

export function getComments(gameId){
    return get(endpoints.getComments(gameId));
}

export function deleteGame(id) {
    return del(endpoints.deleteGame + id);
}

export function postComment(data){
    return post(endpoints.postComment,data);
}

// export function getMyPosts(userId) {
//     return get(endpoints.getMyPosts(userId));
// }

// export function addNewPost(body) {
//     return post(endpoints.addNewPost, body);
// }




// export function makeDonation(postId) {
//     return post(endpoints.makeDonation, { postId: postId });
// }

// export function getDonationsCount(postId) {
//     return get(endpoints.getDonationsCount(postId));
// }

// export function hasDonated(postId, userId){
//     return get(endpoints.hasDonated(postId, userId))
// }