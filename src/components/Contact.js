import React from 'react';
import Form from './Form';
import Nav from './Nav';
import '../App.css';
import Footer from './Footer';

function Contact() {  
    return (
    <section className="contactPage">    
    <Nav />   

    <section className = "contact-container">
    <h1> W O R K &nbsp; W I T H  &nbsp;M E </h1>

    <div className="contactInfo">
    <p>
    Handmade lettering is a priceless investment for any business, brand or personal project that needs to stand apart. When you work with me, you are getting the benefit of 12 years of letterform obsession, a keen eye for color and spatial design, as well as thoughtful and generous consulting around small design decisions that make all the difference.
    </p>

    <p>
    If you are interested in working with me, kindly review the following information and fill out the intake form below. I will receive an email with the details of your project, and follow up as soon as I am able to. If you do not feel like your project falls within the relevance of this form, please email me to set up a phone call.
    </p>

    <p>
    handsomehandsigns@gmail.com
    </p>

    <p>
    Thank you for choosing hand painted signs! I look forward to hearing from you.
    </p>

    <Form></Form>

    <p>
    Terms:<br></br>

    ~Once you receive a quote, I ask for 50% to begin work, and 50% upon completion of the project or receipt of the sign. <br></br>

    ~For fabricated wooden signs, you may be charged CA sales tax at a rate of .0725% <br></br>

    ~I offer shipping via USPS for signs under 65 lbs and 115 total inches <br></br>

    ~I offer regional delivery <br></br>

    ~I do not offer commercial installation <br></br>

    ~Any of my designs are not to be duplicated or reproduced, unless we discuss an "unlimited use" package. Reproduction without my permission may result in legal repercussions. 
    </p>
    </div>
    
    </section>
    
    <Footer />
    </section>
    )
}

export default Contact;
