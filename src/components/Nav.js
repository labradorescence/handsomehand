import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {  
    return (
        <nav className = "nav">

            <h3 className="logo"> HANDSOME HAND </h3>
            
            <div className ="navLink">
                <Link to="/" className = "navHome">HOME</Link>
                <Link to="/about" className = "navAbout">ABOUT</Link>
                <Link to="/portfolio" className = "navPort">PORTFOLIO</Link>
                <Link to="/contact" className = "navCont">WORK WITH ME</Link>
            </div>
        </nav>
    )
}

export default Nav;