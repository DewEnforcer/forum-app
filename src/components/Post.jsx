import React from 'react';
import { Link } from 'react-router-dom';

import Loader from "./Loader";
import Response from './Response';
import postService from "../services/postservice";
import { isAdmin } from './../services/authservice';
import { usePost } from '../hooks/usePost';
import CurrentUser from './CurrentUser';

const Post = ({match}) => {
    const postID = match.params.id;
    const [post, setPost] = usePost(postID);

    const handleClosePost = async () => {
        const {status} = await postService.closePost(postID);
        if (status !== 200) return;

        const postCopy = {...post};
        postCopy.closed = true;
        setPost(postCopy);
    }

    if (!post) return <Loader/>

    const {title, responses, _id} = post;

    return (
        <div className="post_body">
            <CurrentUser/>
            <div className="post_header">
                <h2>{title}</h2>
                <span>This thread is {post.closed ? "closed" : "open"} for further discussion.</span>
                <div className="post_controlls">
                {!post.closed && <Link className="btn btn-primary" to={`/reply/${_id}`}>Submit new reply</Link>}
                {(!post.closed && isAdmin()) && <button className="btn btn-danger" onClick={handleClosePost}>Close this thread</button>}
                </div>
            </div>
            <div className="post_main bg-light">
                {responses && responses.map((r) => <Response key={r._id} postID={postID} data={r}/>)}
            </div>
        </div>
    );
}
 
export default Post;