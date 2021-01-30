import http from "./httpservice";
import jwtDecode from "jwt-decode";

const endPoint = "/auth";
const JWT_KEY = "authToken";

export function restoreToken() {
    const previousJwt = getJWT();
    if (previousJwt) http.setJwt(previousJwt); 
}

export async function login(body) {
    const {data: jwt} = await http.post(endPoint, body);
    saveJWT(jwt);
}
export function logout() {
    localStorage.removeItem(JWT_KEY);
}
export function saveJWT(jwt) {
    localStorage.setItem(JWT_KEY, jwt);
}
export function getJWT() {
    return localStorage.getItem(JWT_KEY);
}
export function isLoggedIn() {
    return getJWT();
}
export function getUserID() {
    return jwtDecode(getJWT()).userID;
}
export function getCurrentUser() {
    try {
        return jwtDecode(getJWT())
    } catch (error) {
        return null;
    }
}
export function isAdmin() {
    const user = getCurrentUser();
    return user ? user.isAdmin : false;
}