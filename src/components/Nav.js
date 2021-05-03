import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {  
    return (
        <nav className = "nav">

            <a href ="/" className="logo"> HANDSOME HAND </a>
            
            <ul className ="navLink-container">
                {/* <Link to="/" className = "navHome">HOME</Link> */}

                <div clasName = "navAbout">

                <Link to="/about" className = "navAboutImg"></Link>

                {/* <Link to="/about" className = "navAbout"> ABOUT </Link> */}
{/* 
                logo: https://i.imgur.com/zB8FN3J.png
                about: https://i.imgur.com/iSQ6iii.png
                contact: https://i.imgur.com/lEmZrbe.png
                portfolio: https://i.imgur.com/RzqF2iC.png */}


                </div>

                <Link to="/portfolio" className = "navPort">PORTFOLIO</Link>
                <Link to="/contact" className = "navCont">WORK WITH ME</Link>
            </ul>

        </nav>
    )
}

export default Nav;