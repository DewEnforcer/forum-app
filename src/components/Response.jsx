import React from 'react';
import { Link } from 'react-router-dom';
import { getUserID } from './../services/authservice';
import userService from "../services/userservice";

const Response = ({data, postID}) => {
    const {date, body, creator, _id} = data;

    return (
        <div className="response_box bg-secondary">
            <div className="response_user_tab">
                <span>Username: <Link className="user_page_link" to={`/users/${creator._id}`}>{creator.username}</Link></span>
                <span>Rank: {userService.getRankString(creator.rank)}</span>
            </div>
            <div className="response_text_tab">
                <p>{body}</p>
                <span>Submitted on: {date}</span>
                {getUserID() === creator._id && <Link to={`/edit/${postID}/${_id}`}>Edit</Link>}
            </div>
        </div>
    );
}
 
export default Response;