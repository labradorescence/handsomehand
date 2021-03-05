import React from 'react';
import StyledComp from './StyledComp'
import './Portfolio.css';

export default function Portfolio (){
    return (
        <div>
        <h1> PORTFOLIO </h1>

        <div className="parent">
                <div className="child1"> 
                child 1 </div>

                <div className="child2"> 
                child 2 </div>

                <div className="child3"> 
                child 3 </div>

                <div className="child4"> 
                child 4 </div>
        </div>

        <StyledComp> styled button </StyledComp>


        </div>
    )
}