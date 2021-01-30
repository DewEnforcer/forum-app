import React from 'react'
import { NavLink } from 'react-router-dom'
import NavItem from './NavItem'

export default function Navigation({title, navItems}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {title && <NavLink className="navbar-brand" to="/">{title}</NavLink>}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {navItems.map(n => <NavItem key={n.id} path={n.path} label={n.label}/>)}
                </ul>
            </div>
        </nav>
    )
}
