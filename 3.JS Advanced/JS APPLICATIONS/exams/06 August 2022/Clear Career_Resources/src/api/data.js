import { del, get, post, put } from "./api.js"


const endpoints = {
    'getAll': '/data/offers?sortBy=_createdOn%20desc',
    'getById': '/data/offers/',
    'deleteById': '/data/offers/',
    'editElementById': '/data/offers/',
    'postNewElement': '/data/offers',
    'getAppliedByUser': (offerId, userId) => `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    'postApply': '/data/applications',
    'getCountApplications': (offerId) => `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`
}

export function getAll() {
    return get(endpoints.getAll);
}

export function getById(id) {
    return get(endpoints.getById + id);
}

export function deleteById(id) {
    return del(endpoints.deleteById + id);
}

export function editElementById(id, data) {
    return put(endpoints.editElementById + id, data);
}

export function postNewElement(data) {
    return post(endpoints.postNewElement, data);
}

export function getAppliedByUser(offerId, userId) {
    return get(endpoints.getAppliedByUser(offerId, userId));
}

export function postApply(offerId) {
    return post(endpoints.postApply, { offerId: offerId });
}

export function getCountApplications(offerId) {
    return get(endpoints.getCountApplications(offerId));
}