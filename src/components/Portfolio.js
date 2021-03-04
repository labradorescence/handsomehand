import React from 'react';
import '../App.css';
import StyledComp from './StyledComp'
import './Portfolio.css';

export default function Portfolio (){
    return (
        <div>
        <h1> PORTFOLIO </h1>
        <StyledComp> styled button </StyledComp>

        <div className="parent">
                <div className="child1">  </div>
                <div className="child2">  </div>
                <div className="child3">  </div>
                <div className="child4">  </div>
        </div>

        </div>
    )
}