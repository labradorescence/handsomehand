import React from 'react';
import Nav from './Nav';
import Footer from './Footer';


export default function Portfolio (){

    return (
        <div className="portfolioPage">
        <Nav />


        <div className = "portfolio-container"> 
        <h1> PORTFOLIO </h1>

            {/* large size img */}

            <div className = "img-area">

            <img className = "single-img" src={"https://i.ibb.co/SJXgVBH/image00002.jpg"} alt="image00002" border="0"/>
            <img className = "single-img" src={"https://i.ibb.co/sFWkwKx/image00003.jpg"} alt="image00003" border="0"/>
            <img className = "single-img" src={"https://i.ibb.co/Vqfv9ns/image00007.jpg"} alt="image00007" border="0"/>
            <img className = "single-img" src={"https://i.ibb.co/jDRTx27/image00008.jpg"} alt="image00008" border="0"/>
            <img className = "single-img" src={"https://i.ibb.co/M8Cj3qD/image00009.jpg"} alt="image00009" border="0"/>
            <img className = "single-img" src={"https://i.ibb.co/8MqtZgK/image00010.jpg"} alt="image00010" border="0"/>
            <img className = "single-img" src={"https://i.ibb.co/7rh9fRZ/image00011.jpg"} alt="image00011" border="0"/>
            <img className = "single-img" src={"https://i.ibb.co/20JrY2f/image00012.jpg"} alt="image00012" border="0"/>
            <img className = "single-img" src={"https://i.ibb.co/ggRwvZ0/image00013.jpg"} alt="image00013" border="0"/>
            <img className = "single-img" src={"https://i.ibb.co/N92MZd3/image00015.jpg"} alt="image00015" border="0"/>
            <img className = "single-img" src={"https://i.ibb.co/rx8D7ds/image00016.jpg"} alt="image00016" border="0"/>
            <img className = "single-img" src={"https://i.ibb.co/nRgGLv8/image00024.jpg"} alt="image00024" border="0"/>
            <img className = "single-img" src={"https://i.ibb.co/xfGjjQ8/image00018.jpg"} alt="image00018" border="0"/>
            <img className = "single-img" src={"https://i.ibb.co/S73ZmHv/image00019.jpg"} alt="image00019" border="0"/>
            <img className = "single-img" src={"https://i.ibb.co/zQmK3dF/image00020.jpg"} alt="image00020" border="0"/>
            <img className = "single-img" src={"https://i.ibb.co/GppFJsL/image00021.jpg"} alt="image00021" border="0"/>
            <img className = "single-img" src={"https://i.ibb.co/HtQjbYK/image00025.jpg"} alt="ice" border="0"/>
            <img className = "single-img" src={"https://i.ibb.co/cybYT6Y/image00017.jpg"} alt="iloveyoucar" border="0"/>           
            <img className = "single-img" src={"https://i.ibb.co/CJZCc46/image00005.jpg"} alt="image00005" border="0"/>

            <img className = "single-img" src={"https://i.ibb.co/W0WHzhZ/image00006.jpg"} alt="image00006" border="0"/>
            <img className = "single-img" src={"https://i.ibb.co/HGNy4NP/image00022.jpg"} alt="image00022" border="0"/>
            </div>

        </div> 
        <Footer />
        </div>
    )
}