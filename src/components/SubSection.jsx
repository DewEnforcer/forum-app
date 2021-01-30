import React from 'react';
import PostPreview from "./PostPreview";

const SubSection = ({data}) => {
    const {_id, title, lastPost} = data
    return (
        <div className="sub_section_wrapper">
            <div className="sub_section_header">
                <h3>{title}</h3>
            </div>
            <div className="sub_section_body">
                <PostPreview post={lastPost}/>
            </div>
        </div>
    );
}
 
export default SubSection;