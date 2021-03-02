import React from 'react'
import '../App.css';
import styled, { ThemeProvider} from 'styled-components';
import Button from './StyledButton';

const theme = {
    primary: 'green',
    alert: 'aquamarine',
    font: 'helvetica',
    fontSize: '10rem'
}

export default function StyledComp() {  
    return (
        <div>
        <ThemeProvider theme={theme}>
            <Button color="alert"> styled button </Button>
        </ThemeProvider>
        </div>
    )
}