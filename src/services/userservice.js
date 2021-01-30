import http from "./httpservice";
import {saveJWT} from "./authservice";

const endPoint = "/users";

const register = async body => {
    const res = await http.post(endPoint, body);
    const jwt = res.response.header("x-auth-token");
    saveJWT(jwt);
}

const getRankString = id => "Newbie" //hardcoded value change later when the ranks are a thing

const getUserById = id => http.get(endPoint + id);

export default {
    register,
    getRankString,
    getUserById
}