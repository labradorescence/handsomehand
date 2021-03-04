import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {  
    return (
        <nav className = "nav">
            <h3> HANDSOME HAND </h3>
            
            <ul>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/portfolio">PORTFOLIO</Link>
                <Link to="/contact">CONTACT</Link>
            </ul>
        </nav>
    )
}

export default Nav;