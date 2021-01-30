import {useEffect, useState} from "react";
import {getCurrentUser} from "../services/authservice";

export default function useUser() {
    const [user, setUser] = useState();

    useEffect(() => {
        const user = getCurrentUser();
        if (user) setUser(user);
    }, [])

    return user;
}