import React from 'react'
import '../App.css';
import styled from 'styled-components'


const Button = styled.button`
  padding: 200px;
  border-radius: 1000%;
  font-family: sans-serif;
  font-size: 5rem;
  color: white;
  background-color: ${ (props) => (props.primary? 'green': 'pink')};

  &:hover {
    background: lightblue;
  }
`

export default function StyledComp() {  
    return (
        <Button primary> styled button </Button>
    )
}