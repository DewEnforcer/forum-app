import React from 'react'
import useUser from '../hooks/useUser'
import userService from "../services/userservice";

export default function CurrentUser() {
    const user = useUser();

    if (!user) return null;

    return (
        <div className="current_user_info bg-light">
            <span className="h3_span">User</span>
            <span>Username: {user.username}</span>
            <span>Rank: {userService.getRankString(user.rank)}</span>
        </div>
    )
}
