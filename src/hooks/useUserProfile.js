import {useState} from 'react';
import userService from "../services/userservice";

export default function useUserProfile (id) {
    const [user, setUser] = useState();

    const fetchUser = async () => {
        const {data} = await userService.getUserById(id);

        setUser(data);
    }

    fetchUser();

    return user;
}