import React from 'react';
import { Link } from 'react-router-dom';
import PostPreview from './PostPreview';

const SectionPreview = ({data}) => {
    const {_id, title, iconName, posts} = data;

    const newestPost = posts[0];

    return (
        <div className="section_wrapper bg-secondary">
            <div className="section_header">
                <img src={`${process.env.PUBLIC_URL}/images/${iconName}`} alt="section icon"/>
                <Link to={`/section/${_id}`}><h2>{title}</h2></Link>
            </div>
            {newestPost && <PostPreview postID={newestPost}/>}
            {!newestPost && <span>No posts found!</span>}
        </div>
    )
}
 
export default SectionPreview;