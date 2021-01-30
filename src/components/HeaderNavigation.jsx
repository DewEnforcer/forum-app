import React from 'react'
import {NavLink} from "react-router-dom";

import styles from "../config/styles.json";

const {activeStyle} = styles.header;

export default function HeaderNavigation({user}) {
    return (
        <div className="navbar_wrapper">
        <NavLink to="/">Forum</NavLink>
            {!user && <NavLink to="/login" activeStyle={activeStyle}>Login</NavLink>}
            {!user && <NavLink to="/register" activeStyle={activeStyle}>Sign-up</NavLink>}
            {user && <NavLink to="/logout" activeStyle={activeStyle}>Logout</NavLink>}
        </div>
    )
}
