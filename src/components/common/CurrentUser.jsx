import React from 'react';

const CurrentUser = ({data}) => {
    const {boxCls, params} = data;

    return (
        <div className={boxCls}>
            {params.map(p => <span key={p.label}>{p.label}: {p.data[p.path]}</span>)}
        </div>
    )
}
 
export default CurrentUser;