import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {  
    return (
        <nav className = "nav">
            <h3> HANDSOME HAND </h3>
            
            <ul className="parent">
                <Link to="/" className="child1">  HOME  </Link>
                <Link to="/about" className = "child2">ABOUT</Link>
                <Link to="/portfolio" className="child3">PORTFOLIO</Link>
                <Link to="/contact" className="child4" >CONTACT</Link>
            </ul>
        </nav>
    )
}

export default Nav;