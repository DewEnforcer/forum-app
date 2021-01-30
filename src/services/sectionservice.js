import http from "./httpservice";

const endPoint = "/sections"

const getSections = () => http.get(endPoint);

const getSectionById = id => http.get(`${endPoint}/${id}`);

export default {
    getSections,
    getSectionById
}