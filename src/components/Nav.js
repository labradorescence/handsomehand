import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {  
    return (
        <nav className = "nav">
            
            <h3 className="logo"> HANDSOME HAND </h3>
            
            <div className ="navLink">
                <Link to="/" className = "home">HOME</Link>
                <Link to="/about" className = "about">ABOUT</Link>
                <Link to="/portfolio" className = "port">PORTFOLIO</Link>
                <Link to="/contact" className = "cont">CONTACT</Link>
            </div>
        </nav>
    )
}

export default Nav;