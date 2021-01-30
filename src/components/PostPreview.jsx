import React from 'react';
import {Link} from "react-router-dom";
import { usePost } from '../hooks/usePost';
import Loader from './Loader';

const PostPreview = ({postID}) => {
    const [post] = usePost(postID, true);

    if (!post) return <Loader/>

    const {_id, title, user, date} = post;
    
    const postUrl = `/post/${_id}`;


    return (
        <div className="prev_post_body">
            <Link to={postUrl}><h3>{title}</h3></Link>
            <span><Link className="user_page_link" to={`/users/${user._id}`}>{user.username}</Link>, {date}</span>
        </div>
    );
}
 
export default PostPreview;