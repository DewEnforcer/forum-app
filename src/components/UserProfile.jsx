import React from 'react';
import useUserProfile from '../hooks/useUserProfile';
import userService from '../services/userservice';

const UserProfile = ({match}) => {
    const user = useUser(match.params.id);
    
    return (
        <div className="user_profile_box">
            <h2>Username: {user.username}</h2>
            <h3>Rank: {userService.getRankString(user.rank)}</h3>
            <span>Registered on: {user.regDate}</span>
            {user.isAdmin && <h3>ADMINISTRATOR</h3>}
        </div>
    )
}
 
export default UserProfile;