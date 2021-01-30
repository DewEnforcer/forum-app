import http from "./httpservice";

const endPoint = "/responses"

const createEditUrl = (resID, postID) => `${endPoint}/${postID}/${resID}`;

const submitResponse = ({body}, postID) => http.post(endPoint, {body, postID});

const editResponse = ({body}, resID, postID) => http.patch(createEditUrl(resID, postID), {body})

const getResponse = (resID, postID) => http.get(createEditUrl(resID, postID));

export default {
    submitResponse,
    editResponse,
    getResponse
}