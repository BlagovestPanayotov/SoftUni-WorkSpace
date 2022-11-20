import * as api from './api.js';


const endpoints = {
    'idea': '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    'create': '/data/ideas',
    'ideaById': '/data/ideas/'
}

export async function getAllIdeas() {
    return api.get(endpoints.idea);
}

export async function createIdea(ideaData) {
    return api.post(endpoints.create, ideaData);
}

export async function getById(id) {
    return api.get(endpoints.ideaById + id);
}

export async function deleteById(id) {
    return api.delete(endpoints.ideaById+id);
}