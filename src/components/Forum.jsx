import React from 'react';
import useSections from '../hooks/useSections';
import CurrentUser from './CurrentUser';
import SectionPreview from './SectionPreview';

const Forum = () => {
    const sections = useSections();

    return (
        <div className="forum_wrapper">
            <CurrentUser/>
            <div className="sections bg-light">
                {sections.length === 0 && <h2>There are currently no sections:( </h2>}
                {sections.map((s) => <SectionPreview key={s._id} data={s}/>)}
            </div>
        </div>
    )
}
 
export default Forum;