import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {  
    return (
        <nav className = "nav">
            <h3>menuu nav bar</h3>
            
            <ul className="nav-links">
                <Link to="/"> <li> home </li></Link>
                <Link to ="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    )
}

export default Nav;
