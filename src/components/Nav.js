import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {  
    return (
        <nav className = "nav">

            <a href ="/" className="logo"> HANDSOME HAND </a>
            
            <ul className ="navLink">
                {/* <Link to="/" className = "navHome">HOME</Link> */}
                <Link to="/about" className = "navAbout">ABOUT</Link>
                <Link to="/portfolio" className = "navPort">PORTFOLIO</Link>
                <Link to="/contact" className = "navCont">WORK WITH ME</Link>
            </ul>

        </nav>
    )
}

export default Nav;