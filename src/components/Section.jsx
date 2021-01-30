import React from 'react';
import PostPreview from './PostPreview';
import { Link } from 'react-router-dom';
import useSections from '../hooks/useSections';
import CurrentUser from './CurrentUser';

const Section = ({match}) => {
    const section = useSections(match.params.id);

    const {title, posts, _id} = section;

    return (
        <div className="section_full_box">
            <h2>{title}</h2>
            <CurrentUser/>
            <div className="section_full_control_box">
                <Link className="btn btn-primary" to={`/addPost/${_id}`}>Create new post</Link>
            </div>
            <div className="posts bg-light">
                {posts && posts.map(p => <PostPreview key={p} postID={p}/>)}
                {(posts && posts.length === 0) && <span className="h3_span">Currently there are no posts!</span>}
            </div>
        </div>
    )
}
 
export default Section;