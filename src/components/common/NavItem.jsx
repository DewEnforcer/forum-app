import React from 'react'
import {Link} from "react-router-dom"

export default function NavItem({path, label}) {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={path}>{label}</Link>
        </li>
    )
}
