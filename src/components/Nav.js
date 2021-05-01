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
{/* 
                logo: https://i.imgur.com/fJJSiWb.png
                about: https://i.imgur.com/asK3XbA.png
                contact: https://i.imgur.com/bf6mHT5.png
                portfolio: https://i.imgur.com/4j6tcHN.png */}


                </div>

                <Link to="/portfolio" className = "navPort">PORTFOLIO</Link>
                <Link to="/contact" className = "navCont">WORK WITH ME</Link>
            </ul>

        </nav>
    )
}

export default Nav;