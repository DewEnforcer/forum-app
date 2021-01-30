import http from "./httpservice";

const endPoint = "/posts";

export const createUrl = id => `${endPoint}/${id}`;

export const getPostPreviewById = id => http.get(`${endPoint}/prev/${id}`);

export const getPostById = id => http.get(createUrl(id));

export const submitPost = body => http.post(endPoint, body);

export const closePost = id => http.patch(createUrl(id));

export default {
    getPostPreviewById,
    getPostById,
    submitPost,
    closePost
}