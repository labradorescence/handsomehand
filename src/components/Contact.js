import React from 'react'
import ContactForm from './ContactForm';
import FormMock from './FormMock';

function Contact() {  
    return (
    <div>       
    <h1> CONTACT </h1>
    <h2> WORK WITH ME </h2>

    <FormMock></FormMock>
    
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

    <p>
    Terms:
    ~Once you receive a quote, I ask for 50% to begin work, and 50% upon completion of the project or receipt of the sign. 
    ~For fabricated wooden signs, you may be charged CA sales tax at a rate of .0725%
    ~I offer shipping via USPS for signs under 65 lbs and 115 total inches
    ~I offer regional delivery
    ~I do not offer commercial installation
    ~Any of my designs are not to be duplicated or reproduced, unless we discuss an "unlimited use" package. Reproduction without my permission may result in legal repercussions. 
    </p>

    <ContactForm></ContactForm>

    </div>
    )
}

export default Contact;
