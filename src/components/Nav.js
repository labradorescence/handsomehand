import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {  
    return (
        <nav className = "nav">

            <div className="logo">
            <a href ="/" className="logoImg"></a>
            </div>
            
            <ul className ="navLink-container">
                {/* <Link to="/" className = "navHome">HOME</Link> */}

                <div clasName = "navAbout">
                <Link to="/about" className = "navAboutImg"></Link>
                </div>

                <Link to="/portfolio" className = "navPortImg"></Link>
                <Link to="/contact" className = "navContImg"></Link>
            </ul>

        </nav>
    )
}

export default Nav;

{/* 
                logo: https://i.imgur.com/zB8FN3J.png
                about: https://i.imgur.com/iSQ6iii.png
                contact: https://i.imgur.com/lEmZrbe.png
                portfolio: https://i.imgur.com/RzqF2iC.png */}


{/* 
                handsign 
                logo: https://i.imgur.com/kI5kviD.png
                about: https://i.imgur.com/asK3XbA.png
                contact: https://i.imgur.com/crLyuBq.png
                portfolio: https://i.imgur.com/eEsJrzA.png */}