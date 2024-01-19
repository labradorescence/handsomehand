import React from 'react';
import Nav from './Nav';
import '../App.css';
import Footer from './Footer';



function About() {  
    return (
    <div className="aboutPage">     
    <Nav />  
    
    <section className = "about-container">
    <h1> A B O U T &nbsp; H A N D S O M E &nbsp; H A N D </h1>

    <p>
    Handsome Hand Signs is a small sign shop currently based out of Port Townsend, Wa, specializing in lettering and graphics that are designed and painted completely by hand. Logos, Murals, Truck Lettering, Windows, Wooden Signs & Gold Leaf are among our offerings.
    </p>

    <p>
    Many people are surprised to hear that Sign Painting is (arguably) the oldest trade in the world. For centuries, Sign Painters have harnessed language and letterform in artful ways to shape culture through commerce, direction and expression. It was only as recent as the 1950's that computers, machines and vinyl adhesive started to take the place of hand lettering. When you choose a hand-painted sign, you are not only participating in a rich history of human creativity, but your sign is guaranteed to have soul!
    </p>

    <p>
    Heidi T is an artist, traveler, and owner/operator of Handsome Hand Signs. Influenced by punk rock, graffiti and unconventional approaches, her creations possess a charming and unruly spirit that catch the eye, but still play by the rules. Heidi painted her first sign in 2009 as barter for a hostel in Central America, and officially joined the world of small business in 2018 with a brick and mortar in a rural mountain town. Her business model remains fluid as she prefers to travel for projects whenever possible.
    </p>
    </section>


    <section className = "testimonial">

    <h1> W H A T  &nbsp; O U R  &nbsp; C L I E N T S &nbsp;  S A Y </h1>

    <section className = "testimonial-container">
    <article>
    <img src ="https://i.imgur.com/ZqUSaKA.png" alt="grainBakery" /> 
    <p>“When I opened my business, creating the window sign was something I dreaded because I knew how important it is to have a sign that communicates a little bit about your business style, but I have no design skills. I was so lucky to find Heidi and Handsome Hand Signs! I could not be happier with the results!  Her work is very professional, her prices are fair and just, and she is a joy to work with. She does fantastic work in a short time for a price you can afford, and the look of a hand-painted sign is unbeatable. Don't buy a banner online. Hire Heidi.”</p> 
    
    <address>-Erik, owner of <a href="https://discoversiskiyou.com/restaurants/grain-street-bakery/" target="_blank" rel = "noopener noreferrer" >Grain Street Bakery</a></address>
    </article>

    <article>
    <img src="https://i.imgur.com/RbUw83V.jpg" alt="solocoffee" />

    <p>"Heidi has been sólo’s sign painter since 2013. We started off with a small menu sign, then an entrance sign, and more. Over the years sólo grew as a cafe and Heidi grew as a sign painter, our signs and our relationship did as well. Sólo wouldn’t be the same without the creative touch of Heidi’s intentional and creative signs sprinkled about the cafe. I have always trusted her vision and given her complete creative control, especially after years of getting to know each other. I am always blown away whether it's a new version of the same sign or a completely new concept shows up, revealing her development and growth as an artist over time."</p> <address>- Lauren, owner of <a href="http://www.soloespressobar.com/photos/fq9oqzo9dm2g02agbt13ton7w3r2r3" target="_blank" rel = "noopener noreferrer" >sólo espresso </a></address>
    </article>

    <article>
    <img src="https://i.imgur.com/awbpA3X.jpg" alt = "goldie-testimonial"></img>
    <p> "Heidi from Handsome Hand Signs painted a sign for my soap company. She is such a talented artist! She helped me pick the design and colors and I couldn't have been happier. The classic artistry lends a true authentic touch to my sign that I feel proud to use to represent my business. Excellent service all around. You'd be lucky to have a sign by her!" </p> <address>- Sarah, owner of <a href="https://goldiessoap.com/collections/natural-bar-soaps/products/little-wing-moisturizing-soap" target="_blank" rel = "noopener noreferrer" >Goldie's Natural Beauty</a> </address>
    </article>

    </section>

    </section>
    <Footer />
    </div>
    )
}

export default About;
