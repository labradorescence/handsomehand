import React from 'react'
import '../App.css';
import styled, { ThemeProvider } from 'styled-components'

const theme = {
    primary: 'orange',
    secondary: 'green'
}

const Button = styled.button`
  padding: 200px;
  border-radius: 1000%;

  background-color: ${(props) => props.theme.primary};
  font-family: sans-serif;
  font-size: 5rem;
  color: white;


  &:hover {
    background: lightblue;
  }
`

export default function StyledComp() {  
    return (
        <div>
        <ThemeProvider theme={theme}>
        <Button primary> styled button </Button>
        </ThemeProvider>
        </div>
    )
}