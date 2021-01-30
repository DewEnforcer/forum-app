import {logout} from "../services/authservice";

const Logout = ({history}) => {
    logout();
    window.location.href = "/";

    return null;
}
 
export default Logout;