import React, { useState, useEffect } from 'react';

import CurrentUser from './CurrentUser';
import HeaderNavigation from './HeaderNavigation';

import useUser from '../hooks/useUser';
import Navigation from './common/Navigation';

const initialNavItems = [
    {id: 1, path:"/", label: "Forum"}
]

const userSpecificItems = [
    {id: 2, path:"/logout", label: "Logout"},   
]
const unauthSpecificItems = [
    {id: 3, path:"/login", label: "Login"},
    {id: 4, path:"/register", label: "Signup"},    
]

export default function Header({forumTitle}) {
    const [navItems, setNavItems] = useState(initialNavItems);
    const user = useUser();

    useEffect(() => {
        let stateNav = user ? userSpecificItems : unauthSpecificItems;
        const newNav = [...initialNavItems, ...stateNav];
        setNavItems(newNav);
    }, [user])

    return (
        <div className="header">
            <Navigation title={forumTitle} navItems={navItems}/>
        </div>
    ); 
}